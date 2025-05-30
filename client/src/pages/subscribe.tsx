import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Star, Users, Zap, Crown, Coins, MessageCircle, Video, Mic, Brain, Image, CheckCircle } from "lucide-react";

export default function SubscribePage() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Premium",
      badge: "Save 20%",
      badgeColor: "bg-amber-500/20 text-amber-400",
      monthlyPrice: 12,
      yearlyPrice: 144,
      originalYearlyPrice: 180,
      description: "Premium models and chat history. All the fun at the price of your next Starbucks order.",
      features: [
        { icon: Coins, text: "GF400 free coins each month", color: "text-amber-400" },
        { icon: MessageCircle, text: "5,000 messages / month", color: "text-blue-400" },
        { icon: CheckCircle, text: "Chat History", color: "text-green-400" },
        { icon: Star, text: "Premium Models", color: "text-purple-400" },
        { icon: Zap, text: "NSFW", color: "text-red-400" },
        { icon: Image, text: "Custom Characters", color: "text-indigo-400" },
        { icon: Image, text: "In-Chat Pictures", color: "text-pink-400" },
      ],
      buttonText: "Subscribe Now",
      buttonClass: "bg-gradient-to-r from-gray-600 to-gray-700 hover:opacity-90",
    },
    {
      name: "Deluxe",
      badge: "Best Seller",
      badgeColor: "bg-purple-500 text-white",
      monthlyPrice: 24.5,
      yearlyPrice: 294,
      originalYearlyPrice: 420,
      description: "All-access - Premium + uncensored NSFW chats. Bestseller for a reason 😈",
      features: [
        { icon: Coins, text: "GF1200 free coins each month", color: "text-amber-400" },
        { icon: MessageCircle, text: "20,000 messages / month", color: "text-blue-400" },
        { icon: Video, text: "Video Generation In Chat", color: "text-red-400" },
        { icon: CheckCircle, text: "Chat History", color: "text-green-400" },
        { icon: Star, text: "Premium Models", color: "text-purple-400" },
        { icon: Zap, text: "NSFW", color: "text-red-400" },
        { icon: Mic, text: "Voice", color: "text-green-400" },
        { icon: Image, text: "Custom Characters", color: "text-indigo-400" },
        { icon: Brain, text: "8K Memory", color: "text-purple-400" },
        { icon: Image, text: "In-Chat Pictures", color: "text-pink-400" },
      ],
      buttonText: "Subscribe Now",
      buttonClass: "bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90",
      featured: true,
    },
    {
      name: "Elite",
      badge: "Best Value",
      badgeColor: "bg-green-500/20 text-green-400",
      monthlyPrice: 33,
      yearlyPrice: 396,
      originalYearlyPrice: 600,
      description: "Unlimited-access - Everything in Deluxe + Priority access, Exclusive models. Go all out🔥",
      features: [
        { icon: Coins, text: "GF2000 free coins each month", color: "text-amber-400" },
        { icon: MessageCircle, text: "♾️ Unlimited Messages", color: "text-blue-400" },
        { icon: Video, text: "Video Generation In Chat", color: "text-red-400" },
        { icon: Crown, text: "Elite Roleplay Engine", color: "text-amber-400" },
        { icon: CheckCircle, text: "Chat History", color: "text-green-400" },
        { icon: Star, text: "Premium Models", color: "text-purple-400" },
        { icon: Zap, text: "NSFW", color: "text-red-400" },
        { icon: Mic, text: "Voice", color: "text-green-400" },
        { icon: Image, text: "Custom Characters", color: "text-indigo-400" },
        { icon: Brain, text: "8K Memory", color: "text-purple-400" },
        { icon: Image, text: "In-Chat Pictures", color: "text-pink-400" },
      ],
      buttonText: "Subscribe Now",
      buttonClass: "bg-gradient-to-r from-amber-500 to-amber-600 hover:opacity-90",
    },
  ];

  const testimonials = [
    {
      rating: 4.5,
      text: "I'm ngl IDK what system the AI here uses but it's more fluid than previous AIs I've used",
      author: "iAmSiNnEr",
      platform: "via Twitter",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40",
    },
    {
      rating: 5,
      text: "You guys just made me to upgrade from Premium to Deluxe.",
      author: "Calandriel",
      platform: "via Discord",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c46b4ee2?w=40",
    },
    {
      rating: 5,
      text: "Welp, you guys are doing gods work making this site.",
      author: "Anonymous User",
      platform: "via Discord",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-muted-foreground" />
        ))}
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Hero Section */}
      <div className="text-center mb-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-500/30">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Join our 37,000+ creators community
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Upgrade to Elite or Deluxe today and get access to generating limitless images with your own perfect companion!
        </p>
        
        {/* User Avatars */}
        <div className="flex justify-center space-x-2 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src={`https://images.unsplash.com/photo-${1507003211169 + i * 1000000}?w=48`}
              alt="Community member"
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <span className="text-2xl font-bold">4.8/5</span>
            </div>
            <p className="text-muted-foreground">Rated on theresanaiforthat</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-500 mr-2" />
              <span className="text-2xl font-bold">1M+</span>
            </div>
            <p className="text-muted-foreground">Users across the globe</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-2xl font-bold">1 min</span>
            </div>
            <p className="text-muted-foreground">Last subscription purchase</p>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">Choose your Plan</h2>
        <p className="text-muted-foreground text-center mb-8">
          100% anonymous. You can cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-muted-foreground mr-4">Monthly billing</span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span className="text-foreground ml-4">Yearly billing</span>
          <Badge className="ml-2 bg-green-500/20 text-green-400">-34%</Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={cn(
                "relative",
                plan.featured && "ring-2 ring-purple-500 scale-105"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={plan.badgeColor}>
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                  {isYearly && (
                    <p className="text-sm text-muted-foreground">
                      or ${plan.monthlyPrice}/month{' '}
                      <span className="line-through">${plan.originalYearlyPrice}/year</span>
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={`w-full ${plan.buttonClass}`}>
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold mb-4">Pay using</h3>
        <div className="flex justify-center space-x-4">
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl mb-2">💳</div>
              <p className="text-sm">Credit Card</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl mb-2">🏦</div>
              <p className="text-sm">Pay by Bank</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl mb-2">💰</div>
              <p className="text-sm">One time Payment</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-6">Community Feedback ✉️</h3>
        <p className="text-center text-muted-foreground mb-8">
          Here's what users say about us!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {testimonial.rating} out of 5 stars
                  </span>
                </div>
                <blockquote className="text-muted-foreground mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.platform}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
