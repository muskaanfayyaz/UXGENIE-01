import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

export async function POST(req: Request) {
  try {
    // Check if required environment variables are set
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe secret key not configured' },
        { status: 500 }
      )
    }

    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      return NextResponse.json(
        { error: 'Base URL not configured' },
        { status: 500 }
      )
    }

    const { plan } = await req.json()

    // Validate plan data
    if (!plan || !plan.stripePriceId) {
      return NextResponse.json(
        { error: 'Invalid plan data' },
        { status: 400 }
      )
    }

    // Determine price amount based on plan
    let unitAmount = 0
    if (plan.name === 'Pro' && plan.price.includes('$25')) {
      unitAmount = 2500 // $25.00 in cents
    } else if (plan.name === 'Pro' && plan.price.includes('$199')) {
      unitAmount = 19900 // $199.00 in cents
    } else if (plan.name === 'Enterprise' && plan.price.includes('$99')) {
      unitAmount = 9900 // $99.00 in cents
    } else if (plan.name === 'Enterprise' && plan.price.includes('$799')) {
      unitAmount = 79900 // $799.00 in cents
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product: plan.stripePriceId, // This is your product ID
            recurring: {
              interval: plan.price.includes('/mo') ? 'month' : 'year',
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
