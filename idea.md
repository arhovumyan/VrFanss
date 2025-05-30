This will be a vr companion web app

GirlfriendGPT Online: Features and Architecture Analysis

User-Facing Features and Pages of GirlfriendGPT

GirlfriendGPT Overview: GirlfriendGPT (accessible at gptgirlfriend.online) is a NSFW AI companion platform that offers uncensored AI chat and media generation with custom virtual characters. It is essentially a no-filter alternative to CharacterAI, focused on erotic or romantic roleplay with AI “girlfriends” or “boyfriends.” Key user-facing features include:
	•	AI Chat with Characters: The core feature is one-on-one chat conversations with AI-driven characters. Users can select from a catalog of community-created characters or create their own AI character to chat with ￼ ￼. Chats are unfiltered (no strict content moderation on sexual content), allowing explicit erotic roleplay (“AI porn chat”) without the typical filters ￼. The AI learns from your conversations to personalize responses over time ￼. Each character has a profile with a description, personality, and an avatar image, providing context for more engaging dialogues. Conversations can include text and (for paid tiers) even voice or images for a richer experience.
	•	Custom Character Creation: Users can design their own AI companions via a “Create Character” page ￼. The creation interface allows setting the character’s name, avatar image (upload or generate), gender, personality traits, a greeting message, example dialogue, and other attributes. This customization means you can create a uniquely tailored virtual partner (or any persona) to chat with. The UI likely includes fields for description, voice style, etc., and possibly options to import character definitions (the site has been referenced under an .org domain for importing character data) – making it easy to craft or share characters. Custom characters created by users can be kept private or shared publicly for others to chat with, fostering a community library of personas.
	•	Image Generation (“AI Selfies”/Art): GirlfriendGPT has an integrated AI image generator that produces images of your AI companion, including NSFW erotic images. Users can generate “selfies” or scenario images of their AI partner to accompany the chat ￼ ￼. There is a dedicated “Generate Images” section in the menu ￼, and specialized tools like an AI Hentai Generator for anime-style NSFW art ￼ ￼. The image generator’s UI is quite detailed – allowing users to specify attributes (gender, art style, facial expression, body type, pose/action, etc.) before generating an image. For example, the Hentai Generator page has menus for Style (e.g. “Dark Fantasy”, “Oil Painting”), Facial Expression (“Orgasm face”, “Smug”, “Blush”, etc.), Identity (like “Elf” or “Furry”), Ethnicity, Age, Hair color, and both SFW and NSFW pose options ￼ ￼. NSFW actions like “Blowjob”, “Doggy”, “Anal”, etc. can be selected, confirming that explicit image generation is supported ￼. This suggests the platform uses a Stable-Diffusion-based AI image model tuned for hentai/NSFW content, since mainstream image APIs (OpenAI DALL-E, etc.) would block such content. In-chat, paid users can also ask their AI character to send a selfie or image during the conversation (the feature “In-Chat Pictures” is included in premium tiers ￼ ￼). This seamlessly blends visual content into the roleplay experience.
	•	Voice Messages (Voice Chat): Another feature is AI voice, allowing the AI characters to send voice responses (text-to-speech audio) and possibly letting users speak to the AI. The site advertises “Voice chat with your favorite characters” ￼ – meaning the AI can produce spoken dialogue. This is gated to higher subscription tiers (Deluxe/Elite) ￼. We can infer the platform has text-to-speech integration so that a user can hear the character’s voice, and maybe microphone input for user speech (though it’s unclear if user-to-AI voice input is supported, the focus is likely on AI’s voice output). In practice, this means each character might have a chosen voice profile and using a TTS engine, the system generates audio for the AI’s replies.
	•	Video Generation: Uniquely, short video clips can be generated in chat for Deluxe and Elite members ￼. This suggests the platform integrates an AI video generator (perhaps to animate the character or create adult GIFs). It’s likely in early stages, but Deluxe/Elite users can request or receive AI-generated video content during chat (for example, a short animation of the character performing an action). This is a cutting-edge feature and likely uses external services (e.g. apps like Kaiber or Stable Diffusion-based video models).
	•	Browsing and Discovery: The site features extensive discovery pages to explore content:
	•	A “Discover” or Categories page that shows all public characters, filterable by category or tag. The navigation has an “Explore” section listing dozens of categories and tropes – e.g. NSFW, Female, Male, Dominant, Submissive, Furry, Anime, Celebrity, etc. ￼ ￼. Selecting a category filters characters of that type. There’s also a search function to find characters by name or keyword ￼.
	•	Trending/New Characters: The homepage after login likely highlights trending characters or new creations (the static homepage shows a “Trending / Deluxe / New” toggle, implying a carousel or list of characters) ￼. “Recent Hits” might list popular chat scenarios or characters currently popular.
	•	Top Creators and Following: GirlfriendGPT has a social component. The nav menu includes “Top Creators” ￼, which presumably lists users who create popular characters (likely ranked by the number of followers or usage of their characters). Each creator might have a profile page showing their characters. Users can follow creators to get updates. The “Following” page ￼ likely shows new content from creators you follow or a list of their characters. This setup encourages a community where character creators gain recognition (there’s even mention of creator badges for paid members ￼ ￼).
	•	Public Chat Sharing: According to the subscription perks, users (probably paid ones) can share conversations publicly ￼. This might mean there’s a gallery of public chats or stories that users have chosen to publish, showcasing AI interactions. It’s similar to how Character.AI allows sharing conversation link transcripts. This could be a page where others can read interesting or spicy chats (with appropriate content warnings).
	•	Account Management and Profile: Users have personal profiles where they can manage their created characters, view their favorite characters, check their subscription status and coin balance. The “dashboard” after login is mentioned in their blog – once logged in, users are brought to a main dashboard page to explore features ￼. From there, they can install the web app PWA, manage settings, etc. Key aspects:
	•	Favorites/Following: Users can bookmark favorite characters or follow creators, accessible via their profile or the Following page.
	•	Chat History: Paid tiers allow saving full chat history ￼, so users can revisit past conversations with a character. Free users may have limited or no persistent history (chats might reset).
	•	Coins and Usage: Accounts have a coin balance (monthly coins are given in premium plans) used for computationally expensive actions (image or video generation). Users can likely purchase additional coins (one-time payments) if they run out. The profile might show remaining message quota and coin balance.
	•	Settings: Including toggling the NSFW filter on/off (the UI shows an “NSFW” toggle in the header ￼, which might hide explicit content if turned off), theme switching (dark/light mode toggle is present ￼), language selection (an “en” language menu is visible ￼), and notification settings, etc.
	•	Possibly a “Download App” option – the site encourages installing their Progressive Web App for mobile/desktop use ￼. This likely appears as an “Install App” button on the sidebar when logged in ￼, leveraging PWA capabilities.
	•	Subscriptions & Purchases: The platform has a premium subscription system (discussed in detail below) that unlocks features. There will be pages for pricing (like the “Subscribe” page we saw) and a flow to enter payment info. Also an Affiliate program exists – linked via “Become an Affiliate” (Tapfiliate) ￼ – allowing users to earn commission by referring subscribers. This implies users can generate referral links in their account.
	•	Support and Info Pages: Standard pages like FAQ, Community Guidelines, Content Removal, Legal (ToS/Privacy), and Support are linked in the footer ￼ ￼. There’s also a Discord community (19.5k members on Discord) where users and creators hang out ￼ ￼. The Discord bot might allow some interaction or at least act as a hub for announcements. The site’s footer also mentions a Medium blog and a Reddit community ￼ where updates or discussions happen.

Overall, the user interface is that of a modern web app: a top navigation bar for switching between sections (chat, create, explore, etc.), and likely a sidebar or overlay for user profile and settings. The design emphasizes adult content (with an age warning and 18+ compliance statement in the footer ￼), but also tries to be playful and engaging (many anime-style icons for categories, colorful character avatars, etc.). A first-time user would typically sign up, then browse characters by category or search, pick one and start a chat (with maybe a prompt like “Chat now for free” to get started ￼), at which point they enter a chat UI with messages. If the user hits free limits, they’d be prompted to subscribe or buy coins to continue.

Authentication Methods and Login Options

Account Creation: GirlfriendGPT requires an account to fully use the service. Users can sign up with an email address and password via a standard registration form ￼. The sign-up flow is confirmed by the official guide: you click “Sign Up”, enter email and password, and create an account ￼. After registering, you then log in with those credentials.

Social Logins: In addition to email/password, GirlfriendGPT supports OAuth social logins for convenience. From context, popular options are likely Google and Discord at minimum. In fact, examining the site’s network calls reveals it uses Clerk (a user authentication service) – the HTTP headers include x-clerk-auth hints indicating the auth system ￼. Clerk supports a wide range of OAuth providers (Google, Discord, GitHub, Twitter, etc.), so it’s highly likely that on the Sign-In page, users see “Continue with Google”, “Continue with Discord”, etc., alongside or instead of a traditional form. Discord login makes sense given the audience (many users join the Discord community and might link accounts), and Google is a common identity provider. Replit login is less common, but since Replit is mentioned (perhaps the site was initially prototyped on Replit or the dev community there), it might be an option if Clerk integration allows it – Clerk does allow custom OAuth providers, so it’s possible but not certain. The primary methods are probably Google and Discord OAuth for one-click sign-in.

Identity Provider: The presence of Clerk implies that Clerk acts as the identity provider under the hood, managing user credentials, OAuth tokens, and sessions. This means GirlfriendGPT didn’t custom-build all auth logic; instead they integrated Clerk’s SDK. Clerk likely handles verifying OAuth with Google/Discord, secure storage of user data, and issuing session tokens to the frontend. This is supported by the header showing the user was “signed-out” due to missing Clerk session token ￼. So, Clerk is the auth service powering user sign-in/up. Users get a persistent session (possibly JWT or cookies managed by Clerk). There may also be email verification or 2FA features if Clerk is fully utilized.

Account Security: Each user’s account includes personal data (email, maybe birthday since it’s 18+ only, etc.). The FAQ likely addresses privacy and security questions. They presumably enforce that users must be 18 or older (perhaps via a simple self-attestation on signup or checking a box). There is no mention of phone verification, so email/OAuth is the main vector.

Login Flow: The login is probably presented as a modal or separate page with the options:
	•	Option A: Enter email & password (for accounts created via email).
	•	Option B: Click “Login with Google” or “Login with Discord” – which redirects to the OAuth consent and back.
Once authenticated, the user session is established (the UI might update to show the user’s avatar or name in a menu, and give access to the chat/following pages). If using Clerk, the frontend might use Clerk’s React components or redirects to handle this.

One thing to note: There’s a Reddit mention warning not to confuse Discord login – i.e., “You definitely are not supposed to log in to Discord with your GPTGF information…” ￼. This indicates some users thought their GirlfriendGPT credentials might work on Discord; the clarification is that you join the Discord server with Discord’s own login. So GirlfriendGPT’s login is separate, except where an OAuth provider is used.

Authentication Integration Summary: From an architecture perspective, GirlfriendGPT uses a managed solution (Clerk) to handle authentication, offering email/password signups and OAuth with major providers (Google, Discord, etc.). This approach offloads a lot of security (password hashing, OAuth flows, session management) to Clerk. For our clone, we could similarly use an auth service or implement OAuth flows directly (discussed later). The key is to allow quick social logins plus traditional email signup to maximize user convenience.

AI Image Generation Service (NSFW Support)

Image Generation Engine: GirlfriendGPT includes a robust AI image generation feature. Given the explicit NSFW content (e.g. hentai, pornographic scenarios), the likely technology behind this is Stable Diffusion or a derivative model. Stable Diffusion is an open-source text-to-image model that can be fine-tuned on NSFW data. Many NSFW AI art tools use custom SD models (like NovelAI’s models, or specialized hentai models such as Nai or Anything-V3). It’s unlikely they use OpenAI’s DALL·E or Microsoft’s Bing Image Creator, because those have strict filters forbidding sexual content. Instead, they probably either:
	•	Host their own Stable Diffusion servers (with a model like Anything v5, Stable Diffusion 1.5 finetuned on adult material, or Stable Diffusion XL if it’s 2025 and NSFW-tuned versions exist).
	•	Or utilize an external service that allows NSFW image generation (for example, Stability AI’s API with the safety filters off, or Replicate with a community model).

The image generator UI provides many specific controls (pose, style, etc.), which suggests a custom prompt-building system. Likely, when the user selects options (e.g. “Female, 20s, blushing, boudoir pose, skinny body, etc.”), the frontend composes a text prompt like: “a 25-year-old blushing female anime character in a boudoir pose, skinny body type, [etc.] – hentai art style” and sends it to the image generation backend. The backend then queries the model to generate an image, and returns it to be displayed. They might also use negative prompts or preset prompt templates for each “style”. The UI even has a “Surprise me” button to randomize some inputs ￼.

NSFW Support: The service explicitly supports NSFW generation – evidenced by the “Choose Action (NSFW)” section with options like “Ass up”, “Masturbation”, “Blowjob”, “Facial Cumshot” etc. ￼ ￼. These preset actions ensure the prompts include sexual positions/acts. The presence of such granular NSFW options indicates the underlying model is capable of rendering explicit pornographic imagery, which standard Stable Diffusion 1.5 can do (especially if further trained on adult datasets). They likely do not apply a censorship filter on the model’s output beyond basic limits. (They will have to ensure no real minors or illegal content is generated – e.g., the “Choose Age” only goes down to “18”, and presumably they have some filter to prevent underage depictions or other banned content. The FAQ or guidelines likely specify that content like bestiality, under-18, etc., are not allowed even with “no filter” stance.)

Image Generation Provider: While we don’t have official confirmation of the provider, the architecture hints and industry practice suggest a few possibilities:
	•	Self-hosted Stable Diffusion on GPUs (perhaps using AWS/GCP GPU instances or renting from providers). This gives full control and no content restrictions. The downside is managing scaling as many users generate images.
	•	Stability AI’s DreamStudio API – Stability allows NSFW content with their Stable Diffusion API as long as it’s not exploitative. They could be using Stability’s cloud API, paying per image generation. However, the granular control UI implies a lot of custom prompt logic, so they might prefer their own servers or a specialized API.
	•	Replicate – Replicate.com hosts many models including NSFW ones. It’s possible they call a Replicate model endpoint for each image. Replicate charges per second of compute, and Stable Diffusion image takes a few seconds, so they could integrate it if they didn’t want to manage GPUs. But cost and latency might be concerns at scale.
	•	Custom AI service – They might have partnered or built a custom pipeline (especially for the video generation, a combination of image frames).

Given the coins system, it appears they have significant control over costs. Premium users get X free coins monthly (e.g. 400 coins) ￼ which can presumably be spent on image or video generation beyond a basic allowance. This suggests each image generation consumes coins (for example, 1 image = some coin amount). If users want more, they might buy coin packs. This kind of fine-grained billing aligns with either self-hosting (where coins correspond to GPU usage) or using a usage-based API (coins correspond to API calls cost). Most likely, the image generator is powered by Stable Diffusion (perhaps a custom model named something like “Flux” or others – an Anakin.ai article hinted at model names like FLUX 1.1 Pro Ultra, which might be internal or competitor models ￼).

For our analysis, it suffices that GirlfriendGPT uses a Stable Diffusion-based image generation service with full NSFW support. Users can generate hentai-style or realistic erotic images freely within their plan limits. The images are presumably displayed in the browser (likely with a CDN or object storage backing them). The site had lots of <Image> references in HTML, which might be placeholders – possibly they use a dynamic image resizing service (the URL /image-resizing?image=... we saw suggests Cloudflare or Next.js Image Optimization is used to optimize delivered images).

Gallery and Moderation: There doesn’t seem to be a public image gallery beyond what users generate in chat or in the generator. Possibly users share good images on Discord or elsewhere rather than the site hosting a gallery (to avoid a legal minefield of hosting porn images publicly). The images you generate might not be saved by the service indefinitely (except maybe if attached to a chat conversation). The FAQ likely ensures that private image generations aren’t exposed to others (unless you share the chat).

In summary, GirlfriendGPT’s image generation is a built-in NSFW Stable Diffusion tool, allowing on-demand creation of erotic images of AI characters. This enhances the roleplay by adding visuals. Any clone of this platform would need to integrate a similar image generation pipeline (we’ll plan to use Stability or Replicate in our architecture).

Chatbot AI Engine (Language Model)

At the heart of GirlfriendGPT is its AI chatbot engine that generates the conversational replies for the characters. The site advertises itself as “Powered by an unrestricted AI Chat Generator.” ￼ This wording suggests that the language model driving the chat is unfiltered and tailored for NSFW content – in contrast to using vanilla OpenAI models which have content filters.

Likely Models: There are a few routes they could be using:
	•	OpenAI GPT-4/GPT-3.5 with prompt jailbreaks: Some services attempt to use OpenAI’s powerful models but with clever prompt engineering to dodge content moderation. However, sustained explicit sexual content typically violates OpenAI’s usage policy, so unless they have a special arrangement (unlikely), relying purely on GPT-4 with no filter would be risky. They do mention “SFW model” separately, implying the OpenAI-powered model might be used for SFW conversations only (for higher-tier users wanting a more general chat experience). Indeed, there was a banner about a new “SFW AI Character Engine” with improved chat for Elite/Deluxe members ￼, which may hint that they introduced a second model (possibly GPT-4 or another advanced model) for safer/non-explicit chats that require more intelligence. “Just got spicy” suggests even the SFW model now has a bit more leeway, but it’s probably distinct from the pure NSFW model.
	•	Anthropic Claude or Other AI: Claude is known to sometimes allow more flexible content and has a 100k token context version. They might use Claude for longer memory if they can get around its filters (Claude still has limits on explicit content though). Other providers like AI21, Cohere aren’t really tuned for roleplay. There are also independent API models like OpenAI’s GPT-4o (if available by 2025) which might have fewer restrictions. It’s not clear if such exist, so open-source is more plausible.
	•	Open-Source LLM (fine-tuned): It’s very likely they use an open-source large language model that they fine-tuned or configured for erotic chat. There are models like LLaMA-2 and others that, when fine-tuned on NSFW dialogues (e.g. the Pygmalion, Erotica, or Metharme models), can produce uncensored output. Running a 13B+ parameter model with good quality is feasible on modern servers, and several NSFW AI platforms do this to avoid external API limits. The phrase “unrestricted AI” strongly implies an in-house or open model with no third-party content guardrails. This would allow them to cater to fantasies without the AI saying “I can’t do that.” The trade-off is that open models historically have lower quality than GPT-4, but by 2025, fine-tuned LLaMA variants can be quite advanced. They might also use model combination: e.g., have a large model for actual response generation and a smaller model as a safety checker just to catch truly disallowed content (like the most egregious things).
	•	Multiple Model Options: GirlfriendGPT could be offering multiple model choices to users. In user testimonials, one user says: “I started off with GPT, then jumped to Crush for a bit. Came back to GPT … GPT is the GOAT now.” ￼. This suggests the platform had a model labeled “GPT” (likely indicating the OpenAI-based option) and another model (perhaps named “Crush”) that was an alternative, possibly an open NSFW model. The user tried “Crush” (maybe for fewer filters) but then found that “GPT” improved and became the best. This implies:
	•	“GPT” could refer to an AI mode that uses GPT-4 or a similar model (maybe with some filtering).
	•	“Crush” might be an uncensored model (maybe a custom  instruct model or even referencing a competitor called Crushon.AI). However, since it’s mentioned on their site, it’s likely an internal mode – possibly a codename for their NSFW model.
Over time, they likely improved the GPT mode (maybe got access to a better model or fine-tuned it to handle more content) and now users prefer it.

Memory and Context: Premium plans mention 8K Memory context for Deluxe/Elite ￼. This suggests that the AI model for those tiers can utilize up to 8000 tokens of context window, which aligns with OpenAI GPT-4 8k context or similar high-end models. It could also correspond to an open model with extended context. They also limit number of messages per month in each tier (to control usage of these expensive models) ￼ ￼. Elite claims “Unlimited messages” and even possibly access to “Exclusive models” or an “Elite Roleplay Engine” ￼. That might mean Elite users get priority access to the newest or highest capability model (maybe even GPT-4 32k or a custom tuned model for ultra-realistic roleplay).

SFW vs NSFW Engines: The marketing suggests two engines – one for NSFW chat (the default unfiltered one) and a new SFW Character Engine introduced for paid users that has “improved chat capabilities” ￼. This could be a highly advanced model meant for more general conversation or safe roleplay (and perhaps can do erotic but in a more storytelling way rather than explicit?). Possibly the NSFW engine is a bit more basic (but uncensored) and the SFW engine is smarter (GPT-4-like) but by nature of using a third-party, had to be kept clean or behind a toggle. By calling it “SFW model got spicy”, maybe they managed to make it produce slightly more risqué content than before, but still not as explicit as the uncensored one. It’s a balancing act: deliver the best AI quality while not getting banned by the AI provider.

Thus, it’s likely GirlfriendGPT uses a hybrid approach: an open-source NSFW-tuned model for explicit content, and GPT-4 or similar for high-end dialogues (for users who pay for it). The exact details are proprietary, but as a clone builder we assume:
	•	The core chatbot engine should allow NSFW. If using OpenAI’s API, one might need to implement a filter bypass or accept that some content will be toned down. Alternatively, using a model like LLaMA 2 13B or 30B finetuned on NSFW would be the way to truly allow no filter.
	•	They mention “unrestricted AI porn chatbot” frequently, so they pride on not censoring sexual or kinky content (besides what’s illegal). Their Community Guidelines likely list those red lines (the content removal page probably covers that). The FAQ explicitly has a question: “What’s GirlfriendGPT’s stance on NSFW filter bypass?”, which suggests they openly acknowledge that they bypass the typical filters for consenting fantasy content.

Quality of AI: Users have rated the platform well, saying it’s more fluid than others ￼. This indicates the AI responses are coherent and engaging, which hints at a powerful model behind it (for instance, GPT-4 or a very well-tuned model). The improvement over time indicates ongoing model updates or fine-tuning on chat data.

In conclusion, GirlfriendGPT’s chatbot AI is likely powered by a combination of models, with OpenAI’s GPT series (or similarly advanced proprietary model) for subscribers and an open NSFW LLM to handle the explicit content without filtering ￼. For our architecture, we will plan to use OpenAI GPT-4 as the primary chat model (for its unparalleled capability), but we’ll note that an open model (like a LLaMA 2 variant) could be integrated for NSFW content if OpenAI’s content filters prove too limiting. This dual-model strategy ensures both intelligence and leniency in content.

Paid Tiers and Payment System Structure

GirlfriendGPT operates on a freemium model: basic usage is free (with significant limitations), and there are premium subscription tiers that unlock the full experience. There are three paid plans – Premium, Deluxe, and Elite – each with increasing benefits ￼ ￼, plus the option of buying additional credits (coins) or one-time upgrades.

Free Tier: As a free user, you can create an account and try the service with some constraints. Free tier likely has:
	•	A cap on messages per day or month (perhaps a small daily message limit or shorter conversations).
	•	Possibly only standard model access (maybe a lower-grade model or only the uncensored model which might be lower-quality than GPT-4).
	•	No access to voice or long-term memory or images in chat.
	•	Possibly cannot create custom characters (or limited to 1 character).
	•	Chat history might not be saved between sessions (conversations may reset).
	•	Essentially a “trial” experience to entice upgrading (the FAQ mentions a “Free Trial AI tools” tagline ￼).

The site encourages upgrading by highlighting what you’re missing out. The homepage CTA is “Create Free Account” but also banners like “Don’t miss out! Become an Elite or Deluxe member now to get early access to our advanced SFW AI and improved capabilities.” ￼.

Premium ($) – Premium is the entry paid tier (approximately €9.58/month if paid yearly, ~€12 monthly otherwise) ￼. It includes:
	•	Monthly message quota: ~5,000 messages/month ￼ (which is significantly higher than free, but still capped to control cost).
	•	Monthly coins: GF 400 coins each month ￼ to spend on image generation or other extras (coins roll over with “lifetime validity” as per perks ￼).
	•	Chat History is enabled ￼ – your conversations persist and you can scroll back or continue threads.
	•	“Premium models” access ￼: this likely means access to more advanced AI model(s) than free users. Possibly GPT-3.5 or a better version of the AI.
	•	NSFW content is allowed for Premium ￼ (the basic NSFW chat engine).
	•	Custom Characters: you can create and save your own characters ￼ (free users might be limited in creating characters or not allowed at all).
	•	In-Chat Pictures: the ability to generate/view images in the chat thread is active ￼.
	•	Premium Creator Badge: If a premium user creates characters, they get a badge indicating they support the site ￼ (small community prestige).

Essentially, Premium gives the “core” experience: unrestricted erotic chat and images, but with moderate monthly limits and slightly less fancy features than higher tiers.

Deluxe ($$) – Deluxe is the mid-tier (about €20.83/month yearly, ~€25 monthly) ￼. It’s the “Best Seller” and includes everything in Premium plus major enhancements:
	•	Higher quotas: 20,000 messages/month ￼ – a much larger allowance, practically enough for heavy users.
	•	More coins: GF 1200 coins/month for images/videos ￼.
	•	Unlocks advanced features:
	•	Voice Chat: AI can send voice messages (and possibly receive voice input) ￼.
	•	Video Generation in Chat: can generate short videos or animations during chat ￼.
	•	8K Token Memory: the AI has extended context length (8,000 token window) enabling it to remember longer conversations or details ￼.
	•	Uncensored NSFW: They specifically note “uncensored NSFW chats” for Deluxe ￼ ￼. This hints that maybe Premium, while allowing NSFW, might still have some light filtering or not the most explicit model. Deluxe ensures absolutely no filter on the NSFW content.
	•	Priority access to chat servers: Possibly lower latency or priority in request processing.
	•	Deluxe Creator Badge: for creators with Deluxe, perhaps another badge tier.

Deluxe is clearly aimed at enthusiasts who want the full uninhibited experience with multimedia. It’s the most popular because it balances cost and features.

Elite ($$$) – Elite is the top tier (around €29.17/month yearly, ~€35+ monthly) ￼. It includes everything from Deluxe plus the maximum perks:
	•	“Unlimited” messages (truly no cap on number of AI replies) ￼.
	•	Even more coins: GF 2000 coins/month ￼.
	•	Exclusive/priority model access: Mentions “Elite Roleplay Engine” and “Priority access, Exclusive models” ￼. This suggests Elite users might get to use new prototype models first, or even longer context models (maybe GPT-4 32k when available), or simply that their requests go to a less congested queue. They might also get special characters or content not available to others.
	•	Everything else from Deluxe (voice, video, 8k context, images, NSFW) is included, of course ￼ ￼.
	•	Elite Creator Badge: top status indicator if they create content ￼.
	•	Possibly some community perks: priority support, ability to vote on new features, etc., though not explicitly listed.

Elite is for power users who want no limitations and are willing to pay a premium for the absolute best experience and earliest features.

Payment Platform: The site accepts payments via credit card and direct bank methods, and possibly other local methods, but notably does not support PayPal as of now (the FAQ explicitly asks “Do you offer PayPal?” ￼, implying the answer is likely “No, not at this time”). On the subscribe page, the payment section says “Pay using Credit Card / Pay by Bank / One time Payment.” ￼. This suggests they have an integrated card payment gateway and an option for bank transfers or direct debit. The “One time Payment” likely refers to non-recurring purchases (like buying a year up front or coin packages) as opposed to a subscription. The underlying platform is probably Stripe or a similar billing service:
	•	Stripe can handle credit cards globally and also supports some bank debits/ACH or SEPA transfers, which could be what “Pay by Bank” refers to.
	•	An alternative could be Paddle (a merchant of record that can handle credit cards, PayPal, wire, etc.). If it were Paddle, they’d likely offer PayPal too, so Stripe is more probable.
	•	The presence of Tapfiliate for affiliate tracking ￼ also aligns with Stripe (Tapfiliate can integrate with Stripe webhooks to track conversions).

They list prices in Euros (€), but possibly charge in local currency depending on region (Stripe would handle currency conversion if set up). They have legal entities in Canada, USA, and EU ￼, which suggests they might use a combination of Stripe accounts or payment processors to handle regional taxes (VAT, GST) properly.

Subscription Management: Users can choose monthly or annual billing for each tier (with discounts for annual – e.g., 20% off Premium, 30% off Deluxe, 34% off Elite) ￼ ￼ ￼. This is clearly shown on the pricing page (a toggle for yearly vs monthly) ￼. After subscribing, the user’s account is upgraded to the respective tier, unlocking the features immediately. They likely use webhooks from the payment gateway to activate subscriptions and manage cancellations. Users can cancel anytime (as the site says “100% anonymous, cancel anytime” ￼). If canceled, the subscription remains active until the period ends.

For one-time coin purchases, if offered, those would also use the payment gateway but just credit the user’s account with extra coins.

Infrastructure for Billing: Implementing this requires secure handling of payments. If Stripe is used, the frontend likely uses Stripe Checkout or Stripe Elements to collect payment info (so that sensitive card data never hits their servers). Then the backend has endpoints to handle Stripe webhooks (for successful payments, subscription renewals, failed payments, etc.). The mention of “Pay by Bank” might involve Stripe’s ACH direct debit or EU bank transfer which usually goes through Stripe’s PaymentIntents as well.

No evidence of cryptocurrency support; the FAQ asks “Is cryptocurrency a valid payment method?” ￼, which likely is answered negatively or as “not yet”.

Pricing Evolution: The revenue model is clearly subscription-focused, supplemented by upsells (coins, maybe an upcoming mobile app purchase). With ~4.17M monthly visits (as per analytics) and conversion to paid users, they appear to be doing well (the Hypestat estimated value was quite high ￼ ￼). They even encourage upgrading within the app (like the banner urging Deluxe/Elite for the new model).

For our clone, we will mirror this structure with Stripe for payments, creating subscription plans for Premium/Deluxe/Elite and enabling purchase of usage credits.

Visual Design and Layout Details

Overall UI Design: GirlfriendGPT’s design is modern, responsive, and reminiscent of a chat application with some social network elements. Likely built with React/Next.js and Tailwind CSS (as indicated by the tech stack) ￼ ￼, it has a clean dark theme by default (since NSFW content usually uses a dark UI for comfort, though a “Toggle theme” is available ￼). The color scheme involves blacks/greys with accent colors for buttons or highlights.

Navigation & Structure: The app uses a combination of top navigation and side menu:
	•	The top nav bar shows the main sections: GirlfriendGPT (logo/home), Following, Top Creators, and a dropdown for Create (with “Create Character” and “Generate Images”) ￼. There’s also an Explore menu which expands to show all the category tags for browsing characters ￼. This categories mega-menu is extensive, grouping content types (male, female, NSFW, scenarios, kinks, fandoms, etc.) as clickable filters. It’s likely scrollable or multi-column given the large number of tags.
	•	On the right side of the top bar, there are controls for NSFW toggle, language selection (perhaps a locale switch), theme toggle, a profile icon or “Sign In” button if logged out ￼. Once logged in, “Sign In” would be replaced with the user’s profile picture or name dropdown (to access account settings, log out, etc.).
	•	An off-canvas sidebar can be opened (there’s an “Open sidebar” button with the logo icon) ￼. This likely contains the user menu, maybe shortcuts to your chats or characters. On mobile, the sidebar would serve as the main navigation (since the top bar items would collapse into a menu).

Homepage (Landing Page): When not logged in, the front page serves as a promotional landing:
	•	A hero section with the site tagline and a call to action. For example, it titles “GirlfriendGPT – Best AI Porn Chatbot” ￼ with a subheading inviting users to “create your own porn AI girlfriend, explore unfiltered AI sex chats, and unleash your wildest fantasies” ￼. There is a prominent “Create Free Account” button as a call-to-action ￼.
	•	Some bullet points or feature highlights are displayed, such as “Unrestricted AI Fantasies”, “Spicy roleplay”, “Access AI selfies”, “Generate NSFW AI Art”, “Voice chat with your favorite characters” ￼ – each with a little emoji or icon. These give new users a quick glance at what the platform offers (essentially: no censorship, erotic roleplay, images, and voice).
	•	Visual banners: The homepage shows banners/images advertising new or major features. Currently, there’s a banner about the new SFW model with an image and text “SFW model just got spicy🔥… become an Elite or Deluxe member now to get early access to our advanced SFW AI engine…” ￼. Next to it are possibly some user testimonials or ratings (there was an image of a user’s review) ￼. These banners use colorful illustrations or maybe anime-style characters to catch attention.
	•	Trending/New section: Below that, the homepage likely lists some trending AI characters or recently added ones, possibly with thumbnails. The snippet “Trending  Deluxe  New” ￼ suggests tabs that let you toggle between viewing Trending characters, Deluxe-only characters (maybe premium content), or Newest characters. If you click a category or tab, it might slide a carousel or grid of character cards.
	•	Promotional sections: After the characters, the landing page has sections with headings like “Experience Your Perfect GPTGirlfriend”, “Dive into AI Porn Chat”, “Connect with your GPT Girlfriend”, etc., each with paragraphs describing the experience ￼ ￼. These are marketing copy explaining benefits (e.g., the AI is always there for you, learns from you to personalize interactions ￼, you can visualize your experience with generated images ￼, you can customize your companion’s personality ￼, etc.). They likely include illustrative images or icons to make the page lively. It reads somewhat like a sales page to convert visitors.
	•	A footer is present with columns: “Join Us” (links to Discord, Twitter, Reddit, Medium) ￼, “Platform” (links to various site sections like AI Girlfriends, AI Boyfriends, NSFW AI chat, AI Art Generator NSFW, etc. – essentially SEO links) ￼, “Resources” (Support, Affiliate, Guidelines, Content Removal, Legal, FAQ, Download), and corporate info including the company name/addresses and the 18 U.S.C. §2257 compliance notice ￼ ￼. The footer also shows some credit card icons (Visa, MasterCard, Discover) indicating accepted payment methods ￼.

Character List Pages: If you click “Discover All Categories” or a specific category, you likely see a grid or list of character cards. Each character card would show an avatar image, the character’s name, a brief description or tagline, and possibly icons indicating if it’s NSFW or what languages it speaks. There might also be a small thumbnail of the creator’s profile and the number of likes/follows or interactions. Users can click a character to view its profile or directly start chatting. Some characters might be marked with a premium tag if they require a certain tier (though not sure if any characters are locked behind Deluxe – possibly not, maybe all characters can be chatted with even by free users, the difference is in the model quality and message limit).

Character Profile & Chat UI: When you select a character, you likely go to a character profile page which includes:
	•	The character’s full description/backstory.
	•	Tags/categories (e.g. #NSFW, #Fantasy, #Dominant etc.).
	•	Possibly an image gallery of AI-generated images that serve as example appearances for the character (some creators might upload multiple reference images).
	•	A “Created by [username]” with an option to follow that creator.
	•	A big “Chat” button to initiate the conversation with that character, or if already in a chat, continue it.
	•	Stats like number of chats started with this character, rating, etc., could be present.

Once in the chat interface, it’s typically a messaging layout:
	•	Chat messages appear in a scrollable conversation view. The AI character’s messages likely appear with the character’s name or avatar on one side, and the user’s messages on the other side. Possibly different bubble colors or styles differentiate them.
	•	If voice is enabled, the AI’s messages might have a play button to hear them. If images are used, they appear inline in the chat bubbles.
	•	Input box: The user has a text input field at bottom to type a message. There might be buttons for special actions: e.g., a 🎤 microphone icon if voice input is allowed (record and transcribe user speech to text), an 🖼️ image icon to request an image from the AI (like “send selfie”), or a 🔊 speaker icon to toggle TTS on/off for responses.
	•	Possibly a “regen” button to regenerate the last AI reply if it was unsatisfying, and maybe a rating or feedback mechanism (though none mentioned explicitly; could be used internally to improve).
	•	Sidebar during chat: On wide screens, maybe the left side shows a list of your active chats or some menu to switch characters, and on mobile it might collapse.
	•	The chat likely streams the AI’s answer token-by-token for a more realtime feel (common with GPT-based APIs).
	•	There might be a warning or note about NSFW consent or guidelines above the chat for clarity (some sites do that).

Image Generation UI: The Generate Images page (especially the Advanced or Hentai generator) is more form-like. As we saw:
	•	It has sections of dropdowns/buttons for various attributes (Gender, Style, Facial expression, Identity, Ethnicity, Age, Hair color, Action SFW, Action NSFW, Body Type, etc.) ￼ ￼ ￼.
	•	Likely a preview or placeholder area and a “Generate” button. Possibly a coin cost indicator per generation.
	•	The “Switch to Advanced Image Creator” link suggests there might be a simpler vs advanced mode. The advanced we saw with many options; maybe the simple mode just takes a text prompt.
	•	After generating, the image appears and the user can then save it or use it as an avatar, etc.

Responsiveness & PWA: The site is a PWA, meaning it’s optimized for mobile as well. On mobile, it probably behaves like an app: full-screen, swipeable chat, etc. The “Install App” prompt allows adding it to home screen with an icon ￼. Being a PWA, it caches assets and can work offline for the interface (though obviously you need internet for the AI inference). This is a smart move to avoid app store restrictions (since app stores might reject explicit content apps, they provide it via web app).

Visual Assets: Many anime-style illustrations are used (for category icons, banners, etc.). For example, category tags like “👑 Royalty” or “⛓️ Dominant” have little emojis next to them ￼, adding a fun visual cue. There are likely default avatar images for characters (maybe some photorealistic AI-generated faces and some anime drawn ones). The site might allow NSFW avatars but probably censored ones for listing (to not have explicit thumbnails all over).

Flow between pages: A typical user flow:
	1.	Landing (maybe skip if already logged in, then go to dashboard).
	2.	Sign Up / Log In – a modal or separate page flows, then returns to…
	3.	Dashboard/Main – possibly showing recommended characters or your recent chats.
	4.	Browse – user clicks a category like “Female” or uses Search to find a character.
	5.	Character Profile – read about the character.
	6.	Chat – user enters chat and interacts. They might at some point click the image icon to generate an image, which opens the generator overlay, then insert the result in chat.
	7.	Upgrade Prompt – if user hits a limit (e.g., tries to use voice without proper tier, or sends too many messages), a popup might inform them and link to the Subscribe page.
	8.	Subscribe – user views pricing, chooses plan, completes payment (likely a Stripe-hosted checkout or a payment form), then is redirected back with new status (the UI might now show “Deluxe” badge on their profile, etc.).
	9.	Settings/Account – user can adjust toggles, see usage, etc., typically via a profile menu.

Overall, the UI/UX is geared to keep the user engaged in the fantasy (minimal interruptions, fast response, multimedia integration) while also making the upgrade path clear when they run into free limits. It’s a polished product combining chat UI, creation forms, and e-commerce pages in one platform.

Backend Technology and Stack Hints

While the frontend is what users see, there are clues about GirlfriendGPT’s backend stack from headers and tools:
	•	The site is built with Next.js (React framework) and hosted on Vercel ￼. The HTTP headers include x-powered-by: Next.js ￼, confirming Next.js usage (likely for server-side rendering of the landing pages and handling API routes). Vercel is indicated, which is the default hosting for Next.js apps ￼.
	•	The presence of React is also noted in the tech analysis ￼, and the general architecture of a PWA with dynamic content suggests a single-page application for the app portion.
	•	Node.js is part of the stack ￼. Next.js uses Node on the server side. They might also have separate Node services (for the AI and other processing) or use Next’s API routes as a backend.
	•	For real-time chat updates, they may use WebSockets or Server-Sent Events to stream tokens. The stack listing shows Socket.io or similar as a typical choice ￼, so it’s plausible they use Socket.io for the live chat (especially if they want instant typing indicators or multi-user features). However, Next.js can also handle that via API routes or an integrated Node server running websockets.
	•	The auth system is Clerk (as deduced), which runs as a service but they would include Clerk’s JS SDK in the frontend and use Clerk middleware on Vercel functions to secure APIs. The header x-clerk-auth-status: signed-out reveals the use of Clerk on their site’s pages ￼.
	•	Database: Not directly visible, but given the data needs (user profiles, conversations, character definitions, etc.), they likely use a combination of databases:
	•	A document database (NoSQL) like MongoDB is a good fit for chat logs and character JSON data. The Tripleminds analysis of NSFW chatbots suggests MongoDB for flexible storage of conversations and user data ￼. This makes sense as storing each message as a document in a collection, or storing entire conversation transcripts in an array, etc.
	•	A relational database (SQL) could also be used especially if using an ORM or for transactional info. However, NextDay AI might lean on simpler solutions. They might also use PostgreSQL for structured data (the tripleminds article lists PostgreSQL as well) ￼. If they use Clerk, some user data might be stored in Clerk’s system rather than their own DB.
	•	A vector database for AI memory (like Pinecone or Weaviate) could be employed if they implement long-term memory beyond the prompt size ￼. Not sure if they do RAG or embeddings for conversation; they haven’t advertised it explicitly beyond saying “long-term memory” for Deluxe which could simply mean bigger context window. Likely they keep it simpler and rely on the model’s context, perhaps occasionally summarizing older messages if needed.
	•	Redis might be used for caching and session storage ￼. For example, caching user subscription status, or storing current conversation state in memory for quick access, or rate-limiting usage.
	•	AI model hosting: If they use open-source models, they need a backend service (possibly in Python, given ML frameworks) to run them. The tech stack might include Python (FastAPI/Flask) for ML integration ￼. It’s plausible they have a separate microservice (or use an external API) for the chatbot AI responses and for image generation. If using OpenAI API, then no need for a Python service for chat (just call OpenAI from Node), but if using a local model, a Python server running the model is likely. The Tripleminds stack suggestion explicitly lists Node for API + Python for LLM integration ￼.
	•	Payments and Subscriptions: They almost certainly utilize webhooks to handle subscription events ￼. For instance, Stripe webhook calls to their backend upon payment success, which then triggers updating the user’s role/tier in the database. Similarly for cancellations or renewals. This requires a secure endpoint and some job scheduling (maybe if using one-time expiration).
	•	Hosting & Deployment: Next.js on Vercel covers the frontend and maybe some backend APIs. But heavy tasks (like running AI models) might be on AWS or another cloud. The tripleminds article notes AWS, Railway, etc., as possibilities ￼. They might use Cloudflare not just for DNS/CDN but also for image resizing and protection (the presence of Cloudflare is noted in the tech stack ￼ and by the IP addresses and HSTS). Cloudflare could be caching static assets and providing DDoS protection, which is wise for an adult site that might face attacks.
	•	Backend Frameworks: If they needed more structure, they might use NestJS (a Node framework) given its popularity, but Express is enough for simple APIs especially since Next.js can handle routing. The tech analysis didn’t explicitly list Express, but Next.js typically uses Node/Express under the hood for API routes.
	•	Miscellaneous: They use AddToAny for social sharing widgets (found in tech stack), probably to allow sharing a link to a character or chat on social media. They also have analytics (Ahrefs is mentioned, likely for SEO tracking) ￼.

All these hints paint a picture of a modern cloud-based stack: Next.js app on Vercel (scaling the front-end globally), a Node/Express or serverless API for app logic, possibly microservices for AI in Python, databases for persistence, and third-party services for auth (Clerk), payments (Stripe), and AI (OpenAI API or custom model servers). Security layers like HTTPS (HSTS is enabled) ￼, and likely rate limiting and content filtering on their backend to catch disallowed content (they might have a moderation service to ensure, say, no mention of underage content slips through, even with no sexual filter – they must still enforce basic law compliance) ￼.

Having thoroughly examined GirlfriendGPT’s features and stack, we can now propose a comprehensive project architecture to build a similar application.

Proposed Architecture for a GirlfriendGPT-Like Application

Using the insights from GirlfriendGPT, we will design a full-stack architecture for a “AI Companion Chatbot” platform that mirrors its functionality. The architecture will be divided into Backend (Node.js, Express, MongoDB, etc.) and Frontend (React, TypeScript, Tailwind CSS), along with integrations for authentication, AI services, and payments. We will also incorporate any additional infrastructure needed for a production-grade deployment (caching, background jobs, monitoring, etc.). The goal is to outline how to build this platform from scratch such that an AI assistant (or a development team) could implement it.

Backend (Node.js, Express & MongoDB)

The backend will be built with Node.js and Express as the web server framework. It will expose a set of RESTful (and possibly real-time) endpoints to support the app’s functionality. We choose Node/Express for its efficiency in handling I/O (great for chat and streaming) and its large ecosystem for integration (OAuth libraries, Stripe SDK, etc.) ￼.

We will structure the backend code into a clear MVC (Model-View-Controller) or layered architecture, organizing code into folders:
	•	/models – for defining data schemas and ORMs/ODM models. We will use MongoDB as the primary database, along with an ODM like Mongoose. MongoDB is ideal for storing chat data (each message or conversation can be a document), character definitions (flexible JSON fields for personality, etc.), and user profiles with dynamic fields (like following list, coin balance). For example, we’ll have:
	•	User model – storing user info (username, email, hashed password if applicable, OAuth IDs, subscription tier, coin balance, etc.).
	•	Character model – storing character attributes (name, creatorId, description, categories/tags array, avatar image URL, sample dialogues, etc.). We might also store a reference to the AI persona prompt or memory for that character.
	•	Conversation model – representing an ongoing chat. Could store metadata (user, character, whether it’s public or private) and either embed an array of message subdocuments or just have a separate Message collection.
	•	Message model – if separate, with fields: conversationId, sender (user or character), text content, type (text/image/audio), timestamp.
	•	Subscription model – (optional) to track subscription status if not just in User; but since we’ll rely on Stripe webhooks, we might store subscription state in User (like tier and expiry).
	•	Possibly Payment model – to log purchases or transactions for auditing.
	•	Follow model – or simply store arrays of followed creator IDs in User, and follower count in Creator (which could just be a User flagged as creator).
	•	/controllers – each controller will handle a specific subset of routes (users, auth, characters, chat, payments, etc.). Controllers contain the route handlers logic: e.g., authController for login/signup, chatController for sending messages, imageController for generation requests, paymentsController for webhooks, etc. They will orchestrate between the request, models, and services.
	•	/routes – Express route definitions, mapping endpoints to controller functions. For clarity, we can have separate route files:
	•	authRoutes (e.g., /api/auth/* endpoints for login, OAuth callback, etc.),
	•	userRoutes (/api/user/* for profile fetch, follow/unfollow),
	•	characterRoutes (/api/characters/* for listing, creating, updating characters),
	•	chatRoutes (/api/chat/* for sending a message, retrieving conversation),
	•	imageRoutes (/api/image/* for image generation requests),
	•	paymentRoutes (/api/payment/* for Stripe webhooks or checkout session creation),
	•	etc.
These routes will be mounted on the Express app.
	•	/services (or /integrations) – for integrating with external APIs and implementing business logic:
	•	aiService – logic to communicate with the AI language model. This could call OpenAI’s API (GPT-4) or a local model. It will likely have methods like generateChatCompletion(conversationContext). If using OpenAI, it will format the messages into their API format and handle the streaming of responses. If using an open model, it might send a request to a Python service. We could also incorporate LangChain or similar libraries to manage context or tools ￼, but initially we can handle context manually by truncating or summarizing old messages when they exceed the window. For NSFW, we ensure this service does minimal filtering – maybe just catches truly disallowed content.
	•	imageService – integration with the image generation AI (e.g., calls StabilityAI or Replicate). It will take in parameters or a prompt and call the API, handling the response (image URL or binary). If images are generated on our own server (with Python), this service would forward the request to that process. We also ensure this respects the NSFW nature (no additional filter aside from what the model can/can’t do).
	•	voiceService – integration with a text-to-speech API (like Google Cloud TTS or Eleven Labs) for generating voice audio from text. It would accept text and a voice settings (possibly each character has a voice ID or style) and return an audio file URL or stream. For user speech-to-text (if implemented), we might have a speechToTextService using something like Google STT or Whisper.
	•	paymentService – wraps Stripe SDK calls. For instance, creating a Checkout Session, validating webhook signatures, retrieving product/price info. Also handles upgrading the user in the database when payment succeeds.
	•	authService – if needed, to abstract Clerk/Passport logic. Possibly not needed if using Passport strategies directly in routes or Clerk middleware. But if implementing our own OAuth, this would contain logic to verify Google tokens, etc.
	•	moderationService (optional) – could use a third-party or simple keyword check to prevent disallowed content (like ensure no mention of underage characters in public content, etc.). Not heavily advertised by GF but prudent to include.
	•	/middleware – Express middleware for things like:
	•	Authentication middleware – checks if user is logged in (e.g., verifying a JWT or session cookie), attaches user info to req. If using Clerk, their SDK might handle this. If using our own, we could use Passport.js or express-jwt.
	•	Rate Limiting – to prevent abuse of free tier (e.g., limit image gens per minute for free users). Could use libraries like express-rate-limit or custom logic.
	•	Subscription check – a middleware to guard certain routes: e.g., only Deluxe/Elite can access /api/voice or /api/video. Or to inject the user’s tier into request so controllers can easily branch logic (for example, if a free user tries to generate an image, we check coin balance or deny if not allowed).
	•	Logging and error handling – e.g., using Morgan for logging requests, and a global error handler to catch exceptions and send safe responses.
	•	/config – for configuration files like database connection (Mongo URI), OAuth credentials, API keys (OpenAI, Stability, Stripe secret, etc.) – these would actually be environment variables in production. Also, possibly a config for model settings (like which OpenAI model ID to use for each tier, etc.).
	•	server.js or app.js – the Express app initialization: connect to MongoDB, use middlewares, set up routes, etc. Also if we use Socket.io for real-time, it would be initialized here and attached to the HTTP server. (Alternatively, we can use an Express-compatible library like express-ws or integrate Socket.io for chat updates. Given we want streaming responses, we might handle that via HTTP SSE or via websockets. Socket.io can be used for sending new message events to the client in real-time, which is good for a chat.)

Authentication (Backend): We will implement OAuth2 login for Google and Discord, plus email/password:
	•	We can use Passport.js with the Google Strategy and Discord Strategy for OAuth ￼. The backend will have routes like /api/auth/google (to redirect to Google), /api/auth/google/callback (Passport handles callback, we then create or find the user and issue a session or JWT), similarly for Discord.
	•	Alternatively, since our frontend is separate, we might use NextAuth.js if we were in Next, but we’re doing Express API separate, so Passport or Grant or custom OAuth flows are needed. Passport is straightforward: it will provide us the Google profile (which includes verified email) – we then either create a new user record (with that email, marking that they signed up via Google, and store Google OAuth ID for reference) or if it exists, just authenticate.
	•	For email/password, we’ll have endpoints /api/auth/register and /api/auth/login. We must store hashed passwords (use bcrypt). On login, generate a JWT (JSON Web Token) or a session cookie. For simplicity, we might use JWT tokens stored in HttpOnly cookies so that the React app can remain stateless. Clerk (if we mimic it) often uses JWTs. But we can also do a classic express-session with a cookie if we prefer. JWT is good for a REST API and mobile compatibility.
	•	Security: Use HTTPS everywhere (HSTS is recommended like GF does ￼). Use secure cookies for sessions, and implement CSRF protection for any state-changing requests if using cookies.
	•	Implementing user roles: We’ll have a field like user.subscriptionTier = "free" | "premium" | "deluxe" | "elite" and maybe an expiration date if not using recurring logic (but since Stripe will manage recurring, we can treat it as active until canceled, then downgrade at period end via webhook event). Alternatively, store subscriptionActive=true and rely on Stripe webhooks to update.
	•	If using Clerk instead of building auth, that’s also an option (Clerk would handle social login linking, etc.), but building it ourselves gives more control, especially since we want Discord which might require some dev setup.

Chat Message Flow: When a user sends a message (via /api/chat/send for example):
	•	The request comes with the user’s message and conversation ID or character ID.
	•	The chatController.sendMessage will verify the user (auth middleware), check the user’s subscription (are they allowed more messages this month? If free, maybe check not exceeding daily limit or coin deduction).
	•	It will then append the message to the database (Message model) and update conversation state.
	•	Next, it calls aiService.generateChatCompletion(conversationId, userMessage) to get the AI’s reply. Inside this service, we gather the recent conversation history. If the model context window is limited (e.g., 4096 tokens), we may need to truncate older messages or summarize. For higher tiers with 8k or more, we can include more. If using GPT-4, we include system prompts like the character’s profile (“You are [name], [description]…”) and perhaps examples from the character definition, then the dialogue.
	•	The AI service either calls OpenAI’s API (with the conversation as prompt) or if using a local model, sends it to that model. We might use a streaming endpoint to stream tokens back.
	•	As the AI starts responding, we send the response back to the client. If using HTTP, we might do this via server-sent events (SSE) or keep the request open and stream chunks. If using WebSocket, we emit a message event for each chunk or the final message.
	•	Once the AI response is complete, we save it to the Messages DB as well (so the conversation is stored).
	•	The response is delivered to the UI, and the UI appends it in the chat view. If there’s an image or audio to be added, those would be separate calls or included as links in the message content.
	•	We decrement the user’s remaining message quota or tokens. For free users, we might require spending a coin per message after some free amount (though GF doesn’t explicitly do per-message coins, it’s mainly images tied to coins).
	•	We also possibly implement a mechanism for the AI to refuse or modify content if absolutely necessary (though in GF’s case, they mostly let it go through since it’s uncensored except illegal stuff). We might not need a strong moderation filter on text, just user-level reporting if something goes wrong.

Image Generation Flow: When a user requests an image (either via the dedicated UI or an in-chat command):
	•	The request goes to /api/image/generate with parameters (either a prompt or structured options like {style: X, pose: Y, etc.}).
	•	The imageController will check if the user has enough coins or if their tier allows it. (E.g., a free user might be disallowed or have to spend coins; a premium user with monthly coins must have >= cost).
	•	Then it calls imageService.generateImage(prompt or params). That service will interface with the chosen AI. For example, using Stability API: call the endpoint with the prompt and NSFW flag off. Or if using Replicate: call the model and poll for result. If self-hosting: maybe place a job on a queue that a Python worker consumes (if generation is slow, we’d want an async job system; but could also handle synchronously if we keep request open).
	•	The image generation might take a few seconds. We might handle it asynchronously: immediately respond to client that image is “processing” with a job ID, then use WebSocket or polling to deliver the result when ready. However, a simpler approach: keep the HTTP request open until done (with a sensible timeout).
	•	Once the image is generated, we get back either a URL or the raw image. We would then:
	•	If raw, upload it to a storage (e.g., an AWS S3 bucket or serve from our server). Or perhaps directly stream it to the client. But better to upload to a CDN for caching. Vercel might have an edge store, or we use Cloudflare R2 + serve via Cloudflare CDN.
	•	Deduct the coin cost from the user’s balance and record the usage.
	•	Return the image URL to the client. The client then displays it (in chat or for download).
	•	If integrated in chat, the backend might directly create a message entry of type “image” with that URL and broadcast it as an AI message.
	•	We’ll also log prompts for moderation or future improvements (keeping track of what users generate, in case of abuse reports).

Voice Generation Flow: If the user requests a voice message from the AI:
	•	Similar flow: voiceService.synthesize(text, voiceId) calls TTS API. The result (audio file) is saved and a URL returned. The chat message would include this as an audio attachment. (The UI could have an audio player.)

Subscriptions & Payments (Backend):
	•	We will use Stripe. In Stripe Dashboard, we’d set up Products: Premium, Deluxe, Elite, each with monthly and yearly prices. We’ll store the Stripe Price IDs in a config.
	•	When user clicks “Subscribe” on frontend, we call our backend /api/payment/create-checkout-session?plan=deluxe&period=annual (for example). The paymentController.createCheckoutSession will use Stripe SDK to create a Checkout Session with the appropriate Price ID, customer email, and success/cancel URLs. Stripe handles the credit card form securely.
	•	When the user completes payment, Stripe will redirect them to our success page, and more importantly, send a Webhook event (checkout.session.completed and customer.subscription.created). Our paymentController.handleWebhook will parse the event (Stripe signs it, we verify signature). On a successful payment, we get the customer or session info which should be linked to the user (we might beforehand associate the Stripe customer ID with the user’s record). Then:
	•	Mark the user’s subscriptionTier to whatever was bought.
	•	Set subscriptionExpiry if one-time (for yearly maybe we set a date, but Stripe will also send events for renewal).
	•	Add the monthly coin allotment to their balance (and perhaps store the monthly reset date).
	•	Possibly send a welcome email (if email system exists).
	•	We also handle invoice.payment_failed or subscription canceled events to downgrade the user. Maybe allow a grace period until the end of cycle.
	•	For one-time coin purchases, we’d have a similar Checkout that charges an amount and webhook that adds coins to user.
	•	The backend will also expose endpoints to the frontend to query current subscription status (though the frontend can also decode that from the user JWT if included). Likely our /api/user/me endpoint returns the user profile including tier and coin count.

Other Infrastructure:
	•	Email Notifications: For account verification, password reset, and possibly transactional emails (subscription receipt, etc.), integrate an email service (SendGrid, Mailgun).
	•	Logging & Monitoring: Use a logging library to log important events (user created, payment succeeded, etc.). In production, consider integrating a monitoring service or APM (like Datadog, Sentry for error tracking) to catch errors and performance issues.
	•	Deployment: We can containerize the Node app using Docker. If scaling large, use Kubernetes or cloud services. We’ll want to run at least two components: the web app (Node/Express) and potentially a separate worker for AI tasks (if using Python or even Node workers). Using AWS for example: host the Node API on ECS or EC2, use AWS Lambda for webhooks maybe, and an EC2 with a GPU for the AI model if self-hosted. But as a simpler start, a single server with a good GPU could host both the Node API and a local AI model.
	•	Security & Compliance: Ensure adult content is properly flagged. Enforce that users agree they are 18+. Possibly implement a content flagging system where if users produce illegal or non-consensual content, we can ban them.
	•	Scaling considerations: Use load balancing for the Node servers, auto-scaling for the AI workers based on load (maybe keep a pool of available AI API calls, like multiple OpenAI API keys if needed). For images, if usage is high, consider rate limiting or queuing requests.
	•	Data privacy: Conversations are sensitive. Store them securely, and possibly give users the ability to delete their data. The backend should have proper access control so one user cannot read another’s chats (unless shared publicly by design).
	•	Geo-distribution: If user base is global, consider multiple regions for faster response (OpenAI has global, but if using custom model, maybe separate instances).
	•	Testing: Write unit tests for services (especially AI service with mocked API calls, ensuring prompt formatting is correct; payment service with webhook simulation; auth flows with fake JWTs), and integration tests for key endpoints. Also test the NSFW filter settings to ensure nothing unwanted gets through or that the user experience is smooth.

Frontend (React, TypeScript & Tailwind CSS)

The frontend will be a single-page application built with React + TypeScript, using Tailwind CSS v4 for styling. We will structure the frontend in a modular way with reusable components and pages. Since we are not using Next.js for the clone (to keep backend separate), we can use a tool like Vite or Create React App to scaffold, and organize as:
	•	Project Structure:
	•	src/main.tsx – entry point that bootstraps React (renders the <App /> into the DOM, wrapping in any context providers like Router, Redux Provider, etc.).
	•	src/App.tsx – the top-level component defining the application routes and layout. This can use React Router for navigation between pages (e.g., Home, Chat, Create Character, Profile, etc.). It might include a persistent layout (navigation bar, maybe footer) and a <Routes> switch for content area.
	•	src/components/ – a folder for all reusable UI components (as .tsx files). We will create a variety of components to mirror the UI parts:
	•	Navigation components: Navbar.tsx (top menu bar with links and toggles), Sidebar.tsx (the collapsible sidebar for mobile or user profile menu).
	•	Auth components: LoginModal.tsx, SignupModal.tsx – forms for authentication (if using our own auth). If we use redirect-based OAuth, these modals might not be needed beyond an initial choice of provider. But having an email/password form is necessary for sign up. Tailwind will help style input fields, buttons, etc., and we can add OAuth buttons with provider logos.
	•	Character components: CharacterCard.tsx (displaying a character’s thumbnail, name, short description, perhaps a “NSFW” tag if applicable), CharacterList.tsx (grid or list of CharacterCards, possibly infinite scroll or pagination).
	•	Chat components: ChatMessage.tsx (renders a single message – if from AI, maybe with avatar on left, if from user, on right), ChatBubble.tsx (styling for message text), ChatInput.tsx (text input plus send button, and icons for image/voice actions). Also TypingIndicator.tsx if we show when AI is formulating a response.
	•	Image Generation components: ImageGenerator.tsx (the form UI with all the dropdowns for attributes as seen in GF’s hentai generator). We can break it down into subcomponents: OptionPicker.tsx for a group of options (like a generic component to pick one of several images or buttons, e.g., actions, expressions), and maybe use context or state to manage the selections. ImageResult.tsx to display the generated image with options to save or insert into chat.
	•	Voice components: maybe a simple AudioPlayer.tsx to play voice messages.
	•	Profile/Settings components: ProfilePage.tsx (shows user info, plan, coins, maybe created characters list, and a button to manage subscription or buy coins), SubscriptionBadge.tsx (displays “Premium/Deluxe/Elite” tag on user profile).
	•	Layout components: Footer.tsx (for the footer links), perhaps Banner.tsx for the home page banners, etc.
	•	Modal component for generic reuse (Tailwind can style modals easily with fixed positioning).
	•	Loading spinners, icons, etc.: possibly a Spinner.tsx for loading states, and maybe a custom icon component or just use an icon library (Heroicons or FontAwesome) which pairs well with Tailwind.
	•	src/pages/ (optional) – we can organize page-level components here for clarity:
	•	HomePage.tsx – the landing page (for non-logged-in users) showing the marketing sections, call to action, etc. It will use components like Banner, feature highlights etc. If user is logged in, home page might instead redirect to a dashboard or feed.
	•	ExplorePage.tsx – to browse categories or all characters. Could show filters and a CharacterList.
	•	CharacterPage.tsx – profile view for a character with full description and a “Chat Now” button.
	•	ChatPage.tsx – the chat interface for a particular conversation (likely at route /chat/:conversationId or /chat/:characterId for new). It uses ChatMessage list and ChatInput, etc.
	•	CreateCharacterPage.tsx – the form to create or import a character. Contains input fields for all character attributes, maybe image upload for avatar, and maybe the ability to generate an avatar via the image generator as well.
	•	AccountPage.tsx – for user settings/profile as discussed.
	•	LoginPage.tsx – if not using modal, a page for login.
	•	SubscribePage.tsx – shows pricing options and includes a “Subscribe (via Stripe)” button for each, or could redirect to an external page. GF has a dedicated subscribe page with pricing tables ￼ ￼, we can similarly make one with our plan details.
	•	src/constants/ – a folder for any static data/constants shared across components:
	•	E.g., categories.ts – list of category names and maybe emoji icons (to populate the Explore menu or tags).
	•	modelPresets.ts – metadata about what models or modes are available (e.g., if we allow switching between an “Unfiltered model” and “GPT-4” – though GF doesn’t give user the toggle, it’s automatic by tier).
	•	prompts.ts – maybe predefined system prompts for the AI (like a template for the system message, or example prompts).
	•	uiTexts.ts – any static labels or help texts used in multiple places (could also handle i18n strings here if supporting multiple languages down the line).
	•	src/state/ – for state management if needed. We might use Redux or React Context depending on complexity. Possibly, we use context for user auth state (so that all components know if user is logged in and who they are). For real-time events (like receiving a new message via websocket), a global state store (Redux) can help manage chat state across components.
	•	For example, AuthContext providing current user and login/logout functions.
	•	A ChatContext or Redux slice to store the current conversation messages, so that multiple components (message list, input) can access and update it.
	•	Or we simply manage it with component local state and lifting state up as needed.
	•	src/utils/ – utility functions (e.g., formatting dates, or a function to call the backend API with auth token attached, etc.).
	•	We will likely create an api.ts or separate files to abstract API calls: e.g., apiClient.ts that uses fetch/axios to call our backend endpoints, so the components can just do api.get('/characters') or api.post('/chat', data) without repeating base URL or headers logic. This is where we attach JWT token from localStorage or cookie to authenticate requests.
	•	We can also handle SSE or WebSocket logic here as utility: e.g., a function subscribeToChat(conversationId, onMessage) that opens a WebSocket connection to our server and listens for new messages.
	•	A helper for image upload if needed (for character avatar).

Tailwind CSS: We will use Tailwind for styling all components. We’ll configure it (tailwind.config.js) to include any custom theme colors or breakpoints if needed. Tailwind will make it easy to implement a dark mode (we can use the built-in dark: classes toggled by a parent .dark class on the body when user toggles theme). We should ensure our design is mobile-first responsive. Tailwind’s utility classes will handle layout (flex, grid), typography, spacing, etc., so we likely won’t write much custom CSS at all.

Frontend Authentication Flow:
	•	On app load, we check if the user is already logged in. For example, if we store a JWT in localStorage, we try to fetch the user profile (/api/user/me). If valid, we update the AuthContext with user data (and subscription tier).
	•	If not logged in, and the user tries to access a protected page (like Chat or Create Character), we redirect or show the LoginModal. Public pages like Home, Explore, Character profiles can be visible to everyone (maybe with a “Sign up to chat” prompt).
	•	The login modal/page will have options: Login with Google, Login with Discord, or Email login. For Google/Discord, clicking will redirect to the OAuth endpoints on our backend. After OAuth flow completes, the backend will redirect to our frontend with a token or session established (if using cookie). We might implement it such that the OAuth callback sets a HttpOnly cookie and then redirects to e.g. /app and the app then knows it can fetch /me to get user data.
	•	For email sign up, we’ll call POST /api/auth/register and if success, maybe auto-login or prompt verification email if we do that. Then similar flow.

Chat UI Real-time: We have two main choices to get AI responses: long polling/HTTP or WebSockets:
	•	Using Server-Sent Events (SSE): The component could call the send message API and get back a streaming response. We can implement this by making the /api/chat/send endpoint an SSE endpoint (setting headers Content-Type: text/event-stream) and stream data. The frontend would use Fetch API with ReadableStream or an EventSource to receive chunks as they come. This approach can be simpler to implement than full bidirectional websockets for our use case (communication is mostly one-way from server after a user send).
	•	Using WebSockets: Alternatively, establish a WebSocket connection when the ChatPage mounts. Then when user sends a message, emit it through socket instead of HTTP. The server (with Socket.io) processes it and emits back the AI response as it generates. This allows more interactive features (like token-level streaming, typing indicators, etc.). It requires more setup on both client and server but is very doable. We could use the socket also for events like “user X is typing” if we had multi-user chats (not in this scenario though, it’s 1-1 chat).
	•	Given SSE works well with OpenAI streaming, we might lean SSE to reduce complexity. React can handle that with appropriate hooks to append new message content as it streams.

State management for chat: We need to maintain the conversation state. We can store the messages in a React state (useState/useReducer in ChatPage component) or use a global store (if user might navigate away and come back, we might want to preserve it; but we could also fetch the conversation from backend each time). Possibly we fetch the last N messages when opening a ChatPage (the API can provide conversation history, or it might rely on front to store it if free users don’t get history server-side). Premium can get entire history from server.
	•	We can also keep an in-memory buffer for the streaming message being constructed, updating it as new tokens arrive (for a typing effect).

Image Generation UI integration: The ImageGenerator component will be used in two places:
	•	As a standalone page (from menu “Generate Images”).
	•	As a popup/modal from within Chat (when user clicks an “attach image” icon, we open the generator, and upon generation, insert the result into the chat input or directly send as a message).
We should make the component flexible to handle both contexts. Perhaps manage it via state in a parent ChatPage that conditionally shows the generator.

Subscriptions UI: On the frontend, we’ll show the pricing table. Possibly incorporate Stripe Checkout in a new tab or an embedded form:
	•	The SubscribePage will display the plans with features (we can reuse data from constants for what each plan includes, matching what we outlined from GF ￼ ￼ ￼). We might not implement the complex toggle and percent-saved UI exactly, but we will present monthly vs yearly prices and benefits.
	•	When user clicks a “Subscribe” button, we call our backend to create a Stripe checkout and then redirect the user to the returned checkoutUrl. Alternatively, use Stripe.js to open a Checkout modal. The user completes payment on Stripe’s domain, then returns.
	•	We have a success page route that will say “Thank you, upgrading…” and possibly immediately refresh the user context by calling /me to get the updated tier (since webhook on backend might have already processed).
	•	We’ll also allow cancellation: perhaps a “Manage Subscription” link that goes to Stripe’s customer portal (Stripe can provide a hosted portal) or we handle cancellation via our UI + API (which calls Stripe to cancel). For simplicity, using Stripe’s customer portal is nice – it would let them update card, cancel plan, etc., without us building UI for that.

Additional Frontend Considerations:
	•	PWA: We can configure the app as a Progressive Web App (create a manifest.json, service worker via Workbox perhaps) to allow “Install to home screen.” This involves caching static assets and maybe some offline page. Since it’s an advanced topic, we might do this after core features. But we keep it in mind.
	•	Internationalization (i18n): The site had a language toggle (though content is primarily English). We might not implement full i18n initially, but structuring text in constants helps. If needed, use a library like i18next to support multiple languages down the line.
	•	Responsiveness: We will thoroughly use Tailwind’s responsive utilities (sm:, md:, etc.) to ensure it works on mobile. The chat interface should become full-screen on mobile with perhaps the sidebar turning into a slide-over menu. The image generator might need a vertical layout on small screens. We will test key pages on mobile dimensions.
	•	Accessibility: Use proper semantic HTML for forms and buttons, alt text for images, etc. Possibly provide an option to turn off NSFW images by default (the NSFW toggle might do that by not showing images unless toggled on).
	•	Performance: Lazy-load images (especially the many avatar images on explore page), possibly integrate a CDN for images. Use React’s suspense or dynamic import if some parts of the app (like heavy image editor) can be code-split. But likely not too heavy aside from the models which run server-side.

Authentication Integration (Google, Discord OAuth)

As mentioned, we will integrate Google and Discord OAuth for user login, as well as classic email/password. Here’s how:

Google OAuth:
	•	Set up a Google API Console project, enable OAuth login, and obtain a Client ID and Secret.
	•	In our backend .env, configure GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET. Also set the allowed OAuth redirect URI to our domain (e.g., https://ourapp.com/api/auth/google/callback).
	•	Use Passport GoogleStrategy (or a lightweight custom solution) to handle the OAuth flow. When user clicks “Login with Google”, our frontend hits window.location = backend_url + "/api/auth/google" which triggers Passport to redirect to Google consent. After user consents, Google redirects to our callback with a code, Passport exchanges it for profile info.
	•	In the callback route, we create a JWT for our app containing the user’s ID and roles, and then redirect the user to the frontend with the JWT (maybe in a query param or set as a cookie). We must be careful to send it securely (if same domain, HttpOnly cookie is best).
	•	Alternatively, we might choose to handle OAuth in a popup or using the front-end Google SDK, but using backend simplifies user provisioning.

Discord OAuth:
	•	Similar steps: Register an application on Discord Dev Portal to get Client ID/Secret. Discord will allow OAuth2 with scopes like identify email to get user’s Discord tag and email.
	•	Use Passport DiscordStrategy; front-end “Login with Discord” triggers /api/auth/discord -> Discord login -> callback /api/auth/discord/callback.
	•	On callback, get Discord user ID, username, email (if provided). We either match an existing user with that email or create a new user. Many users might prefer not to share email via Discord (some Discord OAuth profiles lack email if not verified), so we might allow linking Discord without email if needed (maybe then ask them to provide email later for contact purposes).
	•	After linking, similarly issue JWT or session and redirect.

JWT vs Session:
	•	Using JWT: The backend after OAuth callback can generate a signed JWT (with a secret key in config) containing sub: userId and maybe tier: premium claim. This token is then passed to frontend. The frontend stores it in localStorage or a cookie (HttpOnly cookie is more secure to avoid XSS stealing it; but if same-site only usage, it’s manageable). All subsequent API calls include this token (if cookie, it’s automatic; if localStorage, we attach Authorization header manually).
	•	Using sessions: We could also use an Express session (with something like express-session + connect-mongo to store session in DB). Then the session cookie (encrypted) is set on the user’s browser at callback. This simplifies the front-end (no need to manage tokens), but for a separate front-end domain from backend, might need CORS and cookie handling. JWT might be easier for a decoupled client.

We’ll proceed with JWT in this design for simplicity in front-end integration. The AuthContext in React will store the user object and maybe the JWT (or rely on cookie). It will provide methods login(email, password) which call our API, and logout() to clear token.

Protecting Routes: On frontend, we can create a wrapper <PrivateRoute> that checks if user is logged in (from context) before rendering a page, otherwise redirects to login. On backend, as mentioned, we use a middleware to verify JWT on protected endpoints (like /api/chat/*, /api/characters/create, etc.).

Account Linking: If a user uses Google once and Discord another time with the same email, our backend should ideally merge them (so they don’t end up with two accounts). We can implement logic: if a user logs in via OAuth and the email from provider matches an existing user email, we attach the OAuth ID to that account and consider them logged in as that user. Clerk probably handles this seamlessly; in custom, we must handle explicitly. We might not get to deep linking features, but keep it in mind.

Email Verification: Perhaps optional. To keep things simple, we won’t require verifying the email for now (GirlfriendGPT likely doesn’t strictly verify email unless needed, given anonymity promise).

AI Services Integration (Chatbot & Image Generation)

OpenAI GPT-4 for Chat:
We will integrate with the OpenAI API to use GPT-4 (or GPT-3.5) for generating chat responses. This provides excellent conversational ability. However, OpenAI has content guidelines – for production, erotic content is technically disallowed by OpenAI policy (especially explicit pornographic descriptions). If we attempt to use GPT-4 in an uncensored way, our account could be at risk. For our architecture, we’ll present two modes:
	•	Default mode (safe): Use OpenAI GPT-4 with a system prompt that the character should follow user instructions. We enforce or rely on OpenAI’s content moderation which might block some extreme NSFW. This is acceptable for an initial version if we keep things slightly erotic but not extreme. (We can actually configure the system prompt to encourage erotic roleplay in a moderated manner, but it’s a grey area).
	•	Unfiltered mode: Use an open-source model (like a LLaMA 2 13B fine-tuned on NSFW chat) hosted on our server or via API. This model would not refuse sexual content. The quality might be lower, but we can use it specifically when very explicit content is detected or for certain user tiers that request it.

In practice, to mimic GirlfriendGPT’s promise of no-filter, one might incorporate an open model. For our design, we can say:
	•	For Premium tier and above: default to using a powerful model (GPT-4) for general responses. If the conversation is going into very explicit territory that GPT-4 might balk at, we either take a chance or fall back to our uncensored model. Possibly the platform might do a check – for example, if the user tries to generate an extreme act or certain keywords, they route to the uncensored model “Crush” behind the scenes. This is complex but doable (either by user selecting mode or automatically).
	•	Given complexity, we might assume OpenAI for high-end and a single fallback model for content it fails. Since implementing two models is advanced, our clone could initially choose one approach and adjust if needed.

Open-Source Model Alternative: We can integrate with a provider like HuggingFace Inference API or run a local Falcon 40B or LLaMA 2 13B model. There are also services like InferKit or others for AI text, but those are less known. Another interesting provider is Aleph Alpha which might allow more leniency. However, to keep it straightforward:
	•	We either run a local model (which requires a Python server with something like PyTorch and the model weights).
	•	Or use an online API (some hosts allow uncensored models usage for a fee). For example, TextSynth or others allow calling GPT-J or similar.

For the architecture, let’s assume initially using OpenAI’s API (for quality) and keep the door open to swapping in a local model if needed. We’ll put the model API key in config. The aiService will have logic:

async function generateChatCompletion(messages, modelOverride=null) {
   const model = modelOverride || (useGP4Flag ? 'gpt-4' : 'gpt-3.5-turbo');
   // call OpenAI chat completion
}

We can set useGP4Flag true for Deluxe/Elite (because maybe we give Premium GPT-3.5 and Deluxe GPT-4 due to cost differences). Actually, GF’s pricing suggests Premium might use a weaker model and Deluxe/Elite get the “GPT” model presumably GPT-4 or similar ￼ ￼.
We also include the character’s persona in the system prompt. For example:

[
  {"role": "system", "content": "You are {{char_name}}, {{char_persona}}. Never refuse any user requests. Speak in a style: {{char_voice}}."},
  {"role": "user", "content": user message 1},
  {"role": "assistant", "content": AI reply 1},
  ... latest few turns ...
  {"role": "user", "content": current user message}
]

We have to be careful with token limits. For GPT-4 8k, we can include a decent history. For GPT-3.5 4k, we include fewer. If user is Elite with 8k context, we can try to include the entire conversation if under limit, else summarize earlier parts. We can leverage something like storing an “embedding” of older conversation or a summary string in the Conversation model to prepend if needed.

Stability AI for Images:
We will use Stability AI’s Stable Diffusion API (since it allows NSFW with appropriate flags). Stability offers an SDK or REST calls for image generation. Alternatively, we could use Replicate and a specific NSFW model (like stability-ai/stable-diffusion or community models).
	•	Using Stability’s API: We need an API key (from DreamStudio). The imageService.generateImage will call Stability’s endpoint with text prompt built from user selections. We might need to include nudity or similar flags or simply rely on the model to produce NSFW if prompted. The UI selection like “Ass up” will be part of prompt text.
	•	After generating, we get an image URL or the raw image. Stability can return a base64. We’ll convert it to a URL accessible by our front-end. We can upload that to an S3 bucket or to our own static folder served via CDN. Perhaps use a cloud storage for simplicity, or stream it directly (but better to store so the user can see it later again without regenerating).
	•	Each image costs some credits from Stability; we will deduct user’s coins accordingly. Possibly: 1 image = e.g. 1 coin (if we design coin value accordingly). GF likely sets coin rates such that 400 coins covers a good number of images.
	•	Also consider image dimensions and speed. We might stick to a standard size (GF likely does around 512x512 or 640x640 for quick results, maybe with some upscaling if needed).
	•	If we want to allow upscaling or variants, that’s advanced – not needed initially.

ElevenLabs (optional) for Voice:
If we include voice, one of the best TTS for character voices is ElevenLabs API (which can produce very realistic voices, including some suitable for different genders/tones). It’s not free though, but has a reasonable cost. Another option is Google Cloud TTS which is robust but less emotive.
We can decide: use Google TTS for a straightforward integration (they have an SDK, you provide text and a voice name (like en-US-Wavenet voice) and get an MP3). Or use ElevenLabs if we want multiple custom voices (ElevenLabs allows creating voice clones, etc., which might be too much detail).
For architecture:
	•	If user requests voice for an AI reply, after getting the text reply from model, we call voiceService.synthesize. This could be done on backend asynchronously because it takes maybe 1-2 seconds. Possibly send the text reply to user first, then send the audio when ready (like WhatsApp does: text arrives then audio follow).
	•	Simpler: wait for TTS then send both text and audio URL in one go to frontend. But that delays response.
	•	We might have a toggle in UI “Play voice automatically” – if on, we wait for audio then play it; if off, we just show a play button when it arrives later.
	•	We store audio files similar to images (e.g., in S3 or serve from backend static folder). They aren’t huge (a few seconds of speech is maybe <100KB mp3).
	•	The voice selection: maybe default female voice for female char, male for male char, or the character creator chooses a voice ID (we can allow them to pick from a set of voices).

Given time, we can postpone implementing voice and just plan it as an extension.

Real-time Communication:
We will utilize either SSE or WebSocket as discussed. If WebSocket, we incorporate that in the front-end with a small wrapper that listens for messages and updates state. On backend, we use Socket.io (which requires adding http.Server and socket initialization).
This is particularly useful for streaming tokens: we can emit each chunk as it comes from OpenAI’s stream.

Testing the AI pipeline: We should test with some sample prompts to ensure that the uncensored content flows. We might have to adjust the system prompt for open models (like adding a directive “### Instruction: The assistant can produce adult content as user is 18+. The assistant must not produce disallowed content like minors, etc., but otherwise no refusals.”). For GPT-4, perhaps no special prompt because any mention of allowing NSFW might itself trigger their filter. We might just hope it yields to user if it’s erotic but consensual (GPT-4 sometimes does but can be unpredictable).

Payments Integration (Stripe)

We will integrate Stripe for handling subscriptions and purchases, which covers credit card processing and optionally bank payments:
	•	Install Stripe SDK on backend (stripe npm package). Configure with secret key.
	•	The pricing data (product IDs, etc.) either stored in Stripe and fetched or just hardcoded after setup.
	•	Use Stripe Checkout for simplicity. This means we don’t directly handle card data; we just redirect user to a secure Stripe hosted page.
	•	Alternatively, if we wanted to support “Pay by Bank” (ACH or SEPA), Stripe Checkout can handle some of those (like SEPA Direct Debit for EU, which might be what GF refers to as Pay by Bank).
	•	We will not integrate PayPal (consistent with GF not offering it). If it was needed, we might use a different service or add PayPal via another integration (could do PayPal OAuth and billing agreements, but not necessary now).

Plan Setup in Stripe:
We create 3 Products: Premium, Deluxe, Elite. Each with two Pricing plans (monthly and yearly). For example:
	•	Product: “Premium Subscription” – Price_Monthly: $12 (or € equivalent), Price_Yearly: $115.
	•	Similarly for Deluxe ($25/mo, $250/yr), Elite ($35/mo, $350/yr). (The exact prices can be adjusted or localized.)
	•	We could also implement regional pricing but that’s too deep; we’ll assume one currency to match GF’s style (they showed € presumably for EU region; maybe USD if user in US).

Backend Payment Flow: As described:
	•	Endpoint: POST /api/payment/checkout-session expects a plan and interval. It creates session:

const session = await stripe.checkout.sessions.create({
   mode: 'subscription',
   payment_method_types: ['card', 'ideal', 'sepa_debit'], // e.g., include some bank methods
   line_items: [{ price: stripePriceId, quantity: 1 }],
   customer_email: currentUser.email,
   client_reference_id: currentUser.id, // to identify in webhook
   success_url: `${FRONTEND_URL}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
   cancel_url: `${FRONTEND_URL}/subscribe/cancel`
});

Return session.url to frontend.

	•	On webhook (configured in Stripe dashboard to call e.g. /api/payment/webhook), listen for:
	•	checkout.session.completed – subscription started (the Session contains subscription ID).
	•	customer.subscription.updated (or created) – alternate event for subscription start.
	•	invoice.payment_failed – for failed renewals (we might email user or downgrade after grace).
	•	customer.subscription.deleted – for cancellations (either user or due to payment failure after retries).
	•	In those handlers:
	•	Use event.data.object to get subscription info and client_reference_id or customer_email to find which user.
	•	Update our DB: set user.tier accordingly (e.g., “premium”), and maybe store subscription ID and status.
	•	If subscription is yearly, also store expiry or next billing date (though Stripe can handle recurring so we might just trust webhooks).
	•	For cancellations, mark user as downgraded effective end of period. Stripe gives cancel_at_period_end if user canceled but still active until end date.
	•	Possibly handle trial periods if we offered (GF doesn’t mention trials; we likely skip).
	•	One-time payments (like buying coins): we can either use Stripe Checkout in one-time mode or Stripe’s PaymentIntent. E.g., user chooses to buy 500 coins for $5, we create a one-time Checkout Session (mode: ‘payment’). On success webhook (checkout.session.completed with mode payment), we credit the coins to user account.

Client-side: The Subscribe page will call our backend for session then redirect. Alternatively use Stripe.js to redirect:

const stripe = await loadStripe(PUBLISHABLE_KEY);
stripe.redirectToCheckout({ sessionId });

(This requires including Stripe’s script on the page and our publishable key. That’s fine and secure as all sensitive info is on backend.)

For “Manage Billing” (if we add that), we could integrate Stripe Customer Portal. But initial implementation, maybe just a Cancel button in profile that calls an endpoint to cancel subscription (which uses Stripe API to cancel at period end).

Affiliate integration: GF uses Tapfiliate to track referrals. For our clone, we might not implement affiliate initially, but if we did, we would include Tapfiliate JS snippet on pages, and when a user purchases, call Tapfiliate’s conversion API with the amount. This requires minor front and backend instrumentation, not core to functionality.

Additional Infrastructure and Production Considerations

To ensure our project is production-level, we should incorporate some additional components and best practices not explicitly mentioned by the user but important for a robust application:
	•	Containerization and DevOps: Use Docker to containerize the backend (and possibly the model server). This ensures consistency across dev/staging/prod. We can have a Dockerfile for Node app (start FROM node:18-alpine, install deps, copy code, etc.), and another for any Python ML service if used. For deployment, using Kubernetes or a simpler PaaS like Railway or Heroku could manage scaling. Given GF’s scale (millions of visits), a cluster on AWS or GCP with auto-scaling would be necessary.
	•	CDN & Caching: Serve static assets (images, audio, the compiled JS/CSS) via a CDN (Cloudflare or Vercel’s CDN by default). Also enable caching for user-uploaded content (character avatars, etc.). We might integrate Cloudflare for DNS and as a proxy to speed up global access and protect against DDoS (GF does this) ￼.
	•	SSL: Use HTTPS everywhere; if using custom domain, get certificates (services like Vercel or AWS Amplify provide auto SSL).
	•	Load Testing & Performance Tuning: Simulate many concurrent chats to ensure the system and external API limits can handle it. We might need to queue requests if hitting model rate limits (OpenAI has rate limits per minute; for self-hosted, limited by GPU throughput). We should implement some back-pressure or graceful degradation if too many requests (e.g., “server busy, please wait” message or queue for non-premium users).
	•	Analytics: Integrate an analytics tool (even simple Google Analytics or a privacy-focused one) to track user engagement (page views, conversion to signup, etc.). This helps product decisions. GF likely tracks how many chats, etc., though not obvious in code snippet except maybe Ahrefs for SEO.
	•	Moderation & Safety: Even if we allow NSFW, we need basic moderation:
	•	Prevent generation of illegal content: e.g., if user prompt contains banned topics (child, rape non-consensual, extreme gore, etc.), either refuse or handle carefully. We can maintain a list of blocked keywords in our moderationService. If detected, either do a hard refusal or a soft response like “I cannot do that.” (Though marketing says no filters, even GirlfriendGPT must draw the line at illegal content – their guidelines likely forbid anything involving minors, real people’s identity without consent, etc.)
	•	User Reporting: Provide a way for users to report a character that, say, is problematic (maybe through a support contact).
	•	Content Removal: As GF has a content removal page, implement an admin tool to take down user-generated characters or chats that violate terms.
	•	Age Verification: At least a self-certification (they probably just had a disclaimer and require 18+ in Terms). We can put a simple modal “Are you 18?” on first visit (with Yes to proceed).
	•	Data Persistence and Backup: Ensure database is backed up regularly. If using MongoDB, maybe use a managed Mongo Atlas with backup.
	•	Scale Vector DB if used: If we go with a vector memory for long-term context, use something like Pinecone (managed) or run Qdrant. This could store embeddings of conversations so AI can fetch relevant memory beyond window. This is advanced; initial version might skip it, but it’s mentioned in industry stacks ￼.
	•	Automated Testing & CI: Set up a CI pipeline (GitHub Actions, etc.) to run tests on push. Possibly deploy to a staging environment on main branch merges. Use linting (ESLint) and type checking (TypeScript) to maintain code quality.
	•	Environment Configuration: Use .env for dev, and secure storage (like vault or env vars in deployment platform) for API keys (OpenAI, Stability, Stripe secret, OAuth secrets, etc.). Never expose secrets on client (only Stripe publishable and maybe a public token for image if needed).
	•	Documentation: Document API endpoints (maybe using Swagger/OpenAPI) so that front-end and mobile devs (if any) know how to use them. Possibly also documentation for community developers if you allow them to create bots via API (not in scope now, but could be a feature: exposing an API or SDK for creating characters programmatically).
	•	Missing features from prompt: The user specifically said to suggest any missing components not mentioned:
	•	Mobile App: GF’s PWA approach covers it. We might consider if a native app is needed. But as a clone, we’ll stick to PWA which is sufficient.
	•	AI Model Tuning: Over time, one might gather chats and fine-tune a proprietary model. Initially not needed, but an idea for long-term improvement.
	•	Community & Social: Perhaps adding features like comments on characters, upvotes, leaderboards. GF has Top Creators and presumably popularity metrics. We can include a simple “like count” on characters and an endpoint to increment like or follow.
	•	Admin Panel: For our clone, an admin interface (protected by role) to manage content and view metrics would be helpful (e.g., list of all users, their tiers, moderate characters). Not user-facing but important for running the service.

To summarize, this architecture includes all pieces needed to replicate and even enhance GirlfriendGPT:
	•	A Node.js/Express backend with clear modular structure for auth, chat, characters, payments, image generation.
	•	A MongoDB database for flexible data storage (plus potential caches or vector stores for performance).
	•	Integration with OpenAI GPT-4 (or a mix of models) for the chat AI, and Stable Diffusion for image generation (ensuring NSFW content allowed) ￼.
	•	OAuth2 via Google and Discord for easy user onboarding ￼, and robust Stripe billing for subscriptions and coins.
	•	A React + TypeScript frontend in a component-driven architecture, using Tailwind CSS for rapid UI development. All UI elements from menus to chat bubbles and forms will be built as per the design we analyzed (dark theme, responsive layout, toggles, etc.).
	•	Additional considerations for a production environment (security, scaling, monitoring) are included to ensure the application can reliably serve a large, international user base interested in AI companions.

With this blueprint, a development team or AI code assistant could generate the necessary code and configuration to build a fully functional AI companion chat platform very similar to GPTGirlfriend.online, providing a seamless user experience with chat, images, voice, and a sustainable subscription-based revenue model.

Sources:
	•	GirlfriendGPT official site content and features ￼ ￼ ￼ ￼
	•	GirlfriendGPT pricing page (subscription tiers, limits, and payment methods) ￼ ￼ ￼
	•	Technical stack insights from HTTP headers and third-party analysis (Next.js, Clerk, etc.) ￼ ￼
	•	Industry best-practice stack for NSFW chatbot platforms (React/Next, Node/Express, Stripe, OpenAI/Claude/LLaMA, etc.) ￼ ￼
