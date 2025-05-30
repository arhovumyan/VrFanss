Image Generation Flow: When a user requests an image (either via the dedicated UI or an in-chat command):
The request goes to /api/image/generate with parameters (either a prompt or structured options like {style: X, pose: Y, etc.}).
The imageController will check if the user has enough coins or if their tier allows it. (E.g., a free user might be disallowed or have to spend coins; a premium user with monthly coins must have >= cost).
Then it calls imageService.generateImage(prompt or params). That service will interface with the chosen AI. For example, using Stability API: call the endpoint with the prompt and NSFW flag off. Or if using Replicate: call the model and poll for result. If self-hosting: maybe place a job on a queue that a Python worker consumes (if generation is slow, we’d want an async job system; but could also handle synchronously if we keep request open).
The image generation might take a few seconds. We might handle it asynchronously: immediately respond to client that image is “processing” with a job ID, then use WebSocket or polling to deliver the result when ready. However, a simpler approach: keep the HTTP request open until done (with a sensible timeout).
Once the image is generated, we get back either a URL or the raw image. We would then:
If raw, upload it to a storage (e.g., an AWS S3 bucket or serve from our server). Or perhaps directly stream it to the client. But better to upload to a CDN for caching. Vercel might have an edge store, or we use Cloudflare R2 + serve via Cloudflare CDN.
Deduct the coin cost from the user’s balance and record the usage.
Return the image URL to the client. The client then displays it (in chat or for download).
If integrated in chat, the backend might directly create a message entry of type “image” with that URL and broadcast it as an AI message.
We’ll also log prompts for moderation or future improvements (keeping track of what users generate, in case of abuse reports).
