// scripts/seed.ts
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// ESM __dirname shim
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utility to load JSON data without import assertions
async function loadJSON<T>(filename: string): Promise<T> {
  const filePath = path.resolve(__dirname, "../data", filename);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

// Mongoose model imports
import { CharacterModel }       from "../db/models/CharacterModel.ts";
import { NavigationModel }      from "../db/models/NavigationModel.ts";
import { CreateItemModel }      from "../db/models/CreateItemModel.ts";
import { CategoryModel }        from "../db/models/CategoryModel.ts";
import { ChatItemModel }        from "../db/models/ChatItemModel.ts";
import { CharacterHeaderModel } from "../db/models/CharacterHeaderModel.ts";
import { ChatBubbleModel }      from "../db/models/ChatBubbleModel.ts";
import { TransactionModel }     from "../db/models/TransactionModel.ts";
import { CoinPackageModel }     from "../db/models/CoinPackageModel.ts";
import { UsageItemModel }       from "../db/models/UsageItemsModel.ts";

async function seed() {
  // 1) Connect to MongoDB
  await mongoose.connect(process.env.MONGODB_URI!);
  console.log("✅ Connected to MongoDB");

  // 2) Clear existing data
  await Promise.all([
    CharacterModel.deleteMany({}),
    NavigationModel.deleteMany({}),
    CreateItemModel.deleteMany({}),
    CategoryModel.deleteMany({}),
    ChatItemModel.deleteMany({}),
    CharacterHeaderModel.deleteMany({}),
    ChatBubbleModel.deleteMany({}),
    TransactionModel.deleteMany({}),
    CoinPackageModel.deleteMany({}),
    UsageItemModel.deleteMany({}),
  ]);
  console.log("🗑️ Cleared existing collections");

  // 3) Load JSON data
  const characters = await loadJSON<any[]>("characters.json");
  const navigation = await loadJSON<any[]>("navigation.json");
  const createItems = await loadJSON<any[]>("createItems.json");
  const categories = await loadJSON<any[]>("categories.json");
  const dummyChats = await loadJSON<any[]>("dummyChats.json");
  const characterHeader = await loadJSON<any>("characterHeader.json");
  const chatBubbles = await loadJSON<any[]>("chatBubbles.json");
  const recentTransactions = await loadJSON<any[]>("recentTransactions.json");
  const coinPackages = await loadJSON<any[]>("coinPackages.json");
  const usageItems = await loadJSON<any[]>("usageItems.json");

  // 4) Seed characters
  await CharacterModel.insertMany(
    characters.map(c => ({
      id:         c.id,
      avatar:     c.avatar,
      name:       c.name,
      description:c.description,
      rating:     c.rating,
      nsfw:       c.nsfw,
      chatCount:  c.chatCount,
    }))
  );
  console.log(`→ Inserted ${characters.length} characters`);

  // 5) Seed navigation
  await NavigationModel.insertMany(
    navigation.map(n => ({
      name: n.name,
      href: n.href,
      icon: n.icon
    }))
  );
  console.log(`→ Inserted ${navigation.length} navigation items`);

  // 6) Seed create items
  await CreateItemModel.insertMany(
    createItems.map(i => ({ name: i.name, href: i.href, icon: i.icon }))
  );
  console.log(`→ Inserted ${createItems.length} create items`);

  // 7) Seed categories
  await CategoryModel.insertMany(
    categories.map(c => ({ name: c.name, emoji: c.emoji }))
  );
  console.log(`→ Inserted ${categories.length} categories`);

  // 8) Seed dummy chats
  await ChatItemModel.insertMany(
    dummyChats.map(d => ({
      id:          d.id,
      name:        d.name,
      avatarUrl:   d.avatarUrl,
      snippet:     d.snippet,
      unreadCount: d.unreadCount,
      lastTime:    d.lastTime,
    }))
  );
  console.log(`→ Inserted ${dummyChats.length} dummy chats`);

  // 9) Seed character header
  await CharacterHeaderModel.create(characterHeader);
  console.log(`→ Inserted character header`);

  // 10) Seed chat bubbles
  await ChatBubbleModel.insertMany(
    chatBubbles.map(b => ({ avatarUrl: b.avatarUrl, speakerName: b.speakerName, message: b.message }))
  );
  console.log(`→ Inserted ${chatBubbles.length} chat bubbles`);

  // 11) Seed transactions
  await TransactionModel.insertMany(
    recentTransactions.map(t => ({ icon: t.icon, description: t.description, amount: t.amount, time: t.time, color: t.color }))
  );
  console.log(`→ Inserted ${recentTransactions.length} transactions`);

  // 12) Seed coin packages
  await CoinPackageModel.insertMany(
    coinPackages.map(p => ({ name: p.name, coins: p.coins, price: p.price, popular: p.popular, savings: p.savings }))
  );
  console.log(`→ Inserted ${coinPackages.length} coin packages`);

  // 13) Seed usage items
  await UsageItemModel.insertMany(
    usageItems.map(u => ({ icon: u.icon, name: u.name, cost: u.cost, color: u.color }))
  );
  console.log(`→ Inserted ${usageItems.length} usage items`);

  console.log("🎉 Seed complete");

  // 14) Disconnect
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});