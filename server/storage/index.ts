// server/storage/index.ts

import { IUserStorage      } from "./IUserStorage";
import { ICharacterStorage } from "./ICharacterStorage";
import { ICreatorStorage   } from "./ICreatorStorage";
import { IChatStorage      } from "./IChatStorage";
import { IFollowStorage    } from "./IFollowStorage";

import { UserStorage      } from "./UserStorage";
import { CharacterStorage } from "./CharacterStorage";
import { CreatorStorage   } from "./CreatorStorage";
import { ChatStorage      } from "./ChatStorage";
import { FollowStorage    } from "./FollowStorage";

const userStore      = new UserStorage();
const characterStore = new CharacterStorage();
const creatorStore   = new CreatorStorage();
const chatStore      = new ChatStorage();
const followStore    = new FollowStorage();

export const storage: IUserStorage &
                       ICharacterStorage &
                       ICreatorStorage &
                       IChatStorage &
                       IFollowStorage = {
  // user methods
  getUsers:           userStore.getUsers.bind(userStore),
  getUser:            userStore.getUser.bind(userStore),
  getUserByUsername:  userStore.getUserByUsername.bind(userStore),
  getUserByEmail:     userStore.getUserByEmail.bind(userStore),
  createUser: userStore.createUser.bind(userStore),
  updateUser: userStore.updateUser.bind(userStore),
  deleteUser: userStore.deleteUser.bind(userStore),
  updateUserCoins:    userStore.updateUserCoins.bind(userStore),

  // character methods
  getCharacter:         characterStore.getCharacter.bind(characterStore),
  getCharacters:        characterStore.getCharacters.bind(characterStore),
  getCharactersByCreator:characterStore.getCharactersByCreator.bind(characterStore),
  getFollowedCharacters:characterStore.getFollowedCharacters.bind(characterStore),
  createCharacter:      characterStore.createCharacter.bind(characterStore),
  updateCharacterStats: characterStore.updateCharacterStats.bind(characterStore),

  // creator methods
  getCreator:            creatorStore.getCreator.bind(creatorStore),
  getCreatorByUserId:    creatorStore.getCreatorByUserId.bind(creatorStore),
  getCreators:           creatorStore.getCreators.bind(creatorStore),
  createCreator:         creatorStore.createCreator.bind(creatorStore),
  updateCreatorStats:    creatorStore.updateCreatorStats.bind(creatorStore),

  // chat methods
  getChat:               chatStore.getChat.bind(chatStore),
  getChatsByUser:        chatStore.getChatsByUser.bind(chatStore),
  createChat:            chatStore.createChat.bind(chatStore),
  updateChatActivity:    chatStore.updateChatActivity.bind(chatStore),

  // follow methods
  getFollow:             followStore.getFollow.bind(followStore),
  getFollowers:          followStore.getFollowers.bind(followStore),
  getFollowing:          followStore.getFollowing.bind(followStore),
  createFollow:          followStore.createFollow.bind(followStore),
  deleteFollow:          followStore.deleteFollow.bind(followStore),
};