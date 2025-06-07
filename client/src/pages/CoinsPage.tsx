import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Image, Video, Mic, Wand2, Plus, TrendingDown } from "lucide-react";
import { coinPackages, recentTransactions, usageItems } from '@/constants/index'

export default function CoinsPage() {
  return (
    <div className="p-6 pt-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Coins & Credits</h1>
        <p className="text-muted-foreground">
          Purchase coins to unlock premium features and generate images
        </p>
      </div>

      {/* Current Balance */}
      <Card className="mb-8 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Current Balance</h2>
              <div className="flex items-center space-x-2">
                <Coins className="w-8 h-8 text-amber-400" />
                <span className="text-3xl font-bold">1,250</span>
                <span className="text-muted-foreground">GF Coins</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next refill in</p>
              <p className="text-lg font-semibold">12 days</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Coin Packages */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Coin Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coinPackages.map((pkg, index) => (
            <Card 
              key={index}
              className={pkg.popular ? "ring-2 ring-primary relative" : ""}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <Coins className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <CardTitle>{pkg.name}</CardTitle>
                <div className="text-3xl font-bold mb-2">{pkg.coins} Coins</div>
                <div className="text-muted-foreground">
                  ${pkg.price}
                  {pkg.savings && (
                    <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-400">
                      {pkg.savings}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90" 
                      : "bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:opacity-90"
                  }`}
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How to Use Coins */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Use Coins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usageItems.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-4`} />
                <h3 className="font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.name === "Image Generation" && "Create custom images of your characters"}
                  {item.name === "Video Generation" && "Generate short videos in chat"}
                  {item.name === "Voice Messages" && "Hear your characters speak"}
                  {item.name === "Premium Features" && "Access exclusive AI models"}
                </p>
                <div className={`font-bold ${item.color}`}>
                  {typeof item.cost === 'number' ? `${item.cost} coins` : item.cost}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <transaction.icon className={`w-5 h-5 ${transaction.color}`} />
                    <span>{transaction.description}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span 
                      className={`font-medium ${
                        transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount} coins
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {transaction.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
