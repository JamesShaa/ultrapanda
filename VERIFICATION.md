# Facebook Links Verification

## Current Configuration (src/data/config.json)

```json
{
  "links": {
    "playNow": "https://www.ultrapanda.mobi/",
    "signUp": "https://www.facebook.com/people/Happy-Hour-Wheel-of-Fortune/61557285823755/",
    "signIn": "https://ht.ultrapanda.mobi/#/login?redirect=%2F",
    "facebook": "https://www.facebook.com/people/Happy-Hour-Wheel-of-Fortune/61557285823755/"
  }
}
```

## Where Facebook Links Are Used

1. **Header Logo** → `config.links.facebook`
2. **Sign Up Button (Header)** → `config.links.signUp`
3. **Join Now Button (Hero)** → `config.links.signUp`
4. **Footer Messenger Icon** → `config.links.facebook`
5. **All Game Links** → `config.links.signUp`
6. **Get Started Buttons** → `config.links.signUp`
7. **Contact Page FAQ** → `config.links.facebook`

## Verification Steps

1. **Check GitHub Repository:**
   - https://github.com/JamesShaa/ultrapanda/blob/main/src/data/config.json
   - Should show: `https://www.facebook.com/people/Happy-Hour-Wheel-of-Fortune/61557285823755/`

2. **Check GitHub Actions:**
   - https://github.com/JamesShaa/ultrapanda/actions
   - Latest workflow should be "Deploy to GitHub Pages"
   - Should show "Success" status

3. **Check Deployed Site:**
   - Clear browser cache (Ctrl+Shift+Delete)
   - Hard refresh (Ctrl+F5)
   - Inspect element on any Facebook link
   - Should show: `https://www.facebook.com/people/Happy-Hour-Wheel-of-Fortune/61557285823755/`

## If Links Still Show Old URL

1. **Browser Cache:** Clear cache and hard refresh
2. **CDN Cache:** GitHub Pages may cache for a few minutes
3. **Workflow Status:** Check if GitHub Actions completed successfully
4. **Deployment Delay:** Wait 5-10 minutes after push


