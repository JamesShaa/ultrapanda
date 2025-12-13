# GitHub Setup Instructions

## If you already have a GitHub repository:

Run these commands (replace YOUR_USERNAME and REPO_NAME):

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## If you need to create a new repository:

1. Go to https://github.com/new
2. Create a new repository (don't initialize with README)
3. Copy the repository URL
4. Run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## Authentication

If you're using HTTPS, GitHub may prompt for credentials. You can:
- Use a Personal Access Token instead of password
- Or use SSH: `git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git`


