/*

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCharacterSchema, insertChatSchema, insertFollowSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Characters
  app.get("/api/characters", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;
      const characters = await storage.getCharacters(limit, offset);
      res.json(characters);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch characters" });
    }
  });

  app.get("/api/characters/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const character = await storage.getCharacter(id);
      if (!character) {
        return res.status(404).json({ message: "Character not found" });
      }
      res.json(character);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch character" });
    }
  });

  app.get("/api/characters/creator/:creatorId", async (req, res) => {
    try {
      const creatorId = parseInt(req.params.creatorId);
      const characters = await storage.getCharactersByCreator(creatorId);
      res.json(characters);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch characters by creator" });
    }
  });

  app.get("/api/characters/following/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const characters = await storage.getFollowedCharacters(userId);
      res.json(characters);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch followed characters" });
    }
  });

  app.post("/api/characters", async (req, res) => {
    try {
      const characterData = insertCharacterSchema.parse(req.body);
      const character = await storage.createCharacter(characterData);
      res.status(201).json(character);
    } catch (error) {
      res.status(400).json({ message: "Invalid character data" });
    }
  });

  // Creators
  app.get("/api/creators", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;
      const creators = await storage.getCreators(limit, offset);
      res.json(creators);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch creators" });
    }
  });

  app.get("/api/creators/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const creator = await storage.getCreator(id);
      if (!creator) {
        return res.status(404).json({ message: "Creator not found" });
      }
      res.json(creator);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch creator" });
    }
  });

  app.get("/api/creators/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const creator = await storage.getCreatorByUserId(userId);
      if (!creator) {
        return res.status(404).json({ message: "Creator not found" });
      }
      res.json(creator);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch creator" });
    }
  });

  // Users
  app.get("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // Don't return password
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Chats
  app.get("/api/chats/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const chats = await storage.getChatsByUser(userId);
      
      // Enrich chats with character information
      const enrichedChats = await Promise.all(
        chats.map(async (chat) => {
          const character = await storage.getCharacter(chat.characterId!);
          return {
            ...chat,
            character
          };
        })
      );
      
      res.json(enrichedChats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chats" });
    }
  });

  app.post("/api/chats", async (req, res) => {
    try {
      const chatData = insertChatSchema.parse(req.body);
      const chat = await storage.createChat(chatData);
      res.status(201).json(chat);
    } catch (error) {
      res.status(400).json({ message: "Invalid chat data" });
    }
  });

  // Follows
  app.get("/api/follows/followers/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const followers = await storage.getFollowers(userId);
      res.json(followers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch followers" });
    }
  });

  app.get("/api/follows/following/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const following = await storage.getFollowing(userId);
      res.json(following);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch following" });
    }
  });

  app.post("/api/follows", async (req, res) => {
    try {
      const followData = insertFollowSchema.parse(req.body);
      const follow = await storage.createFollow(followData);
      res.status(201).json(follow);
    } catch (error) {
      res.status(400).json({ message: "Invalid follow data" });
    }
  });

  app.delete("/api/follows/:followerId/:followedId", async (req, res) => {
    try {
      const followerId = parseInt(req.params.followerId);
      const followedId = parseInt(req.params.followedId);
      const success = await storage.deleteFollow(followerId, followedId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Follow relationship not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to unfollow" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
  
*/