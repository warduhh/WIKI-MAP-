- Master branch is your **production** branch

**NEVER code on Master**

1. Git checkout Master
2. git pull

- always do a git pull

3. Fix conflicts
4. Run migrations
5. git checkout -b feature/new-feature
6. Code
7. commits

- Do commits often at each steps. Don't do one big commit!
- Use short meaning messages. "Fixed", "Update" are not meaninful messages.

8. git checkout master
9. git pull
10. Fix conflicts
11. git merge feature/new-feature
12. git push
