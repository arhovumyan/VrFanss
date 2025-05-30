Subscriptions & Payments (Backend):
We will use Stripe. In Stripe Dashboard, we’d set up Products: Premium, Deluxe, Elite, each with monthly and yearly prices. We’ll store the Stripe Price IDs in a config.
When user clicks “Subscribe” on frontend, we call our backend /api/payment/create-checkout-session?plan=deluxe&period=annual (for example). The paymentController.createCheckoutSession will use Stripe SDK to create a Checkout Session with the appropriate Price ID, customer email, and success/cancel URLs. Stripe handles the credit card form securely.
When the user completes payment, Stripe will redirect them to our success page, and more importantly, send a Webhook event (checkout.session.completed and customer.subscription.created). Our paymentController.handleWebhook will parse the event (Stripe signs it, we verify signature). On a successful payment, we get the customer or session info which should be linked to the user (we might beforehand associate the Stripe customer ID with the user’s record). Then:
Mark the user’s subscriptionTier to whatever was bought.
Set subscriptionExpiry if one-time (for yearly maybe we set a date, but Stripe will also send events for renewal).
Add the monthly coin allotment to their balance (and perhaps store the monthly reset date).
Possibly send a welcome email (if email system exists).
We also handle invoice.payment_failed or subscription canceled events to downgrade the user. Maybe allow a grace period until the end of cycle.
For one-time coin purchases, we’d have a similar Checkout that charges an amount and webhook that adds coins to user.
The backend will also expose endpoints to the frontend to query current subscription status (though the frontend can also decode that from the user JWT if included). Likely our /api/user/me endpoint returns the user profile including tier and coin count.