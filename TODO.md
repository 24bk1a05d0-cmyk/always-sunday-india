# GitHub Repo Upload Task - Always Sunday India

## Steps:
- [ ] 1. Clone target repo: `git clone https://github.com/24bk1a05d0-cmyk/always-sunday-india.git`
- [ ] 2. Copy all project files: `rsync -av . always-sunday-india/ --exclude='always-sunday-india'`
- [ ] 3. cd into repo, add/commit/push: `cd always-sunday-india && git add . && git commit -m "Upload complete Café Website Design project (Vite/React/Tailwind, mood selector, animations)" && git push -u origin main`
- [ ] 4. Verify upload: `gh repo view 24bk1a05d0-cmyk/always-sunday-india`
- [ ] 5. Test locally: `cd always-sunday-india && npm install && npm run dev`
- [ ] 6. Cleanup TODO.md
