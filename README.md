# Super Mario (Single File, No Assets)

A simple Super Mario–style platformer implemented entirely in one HTML file—no external assets, images, or libraries. Runs entirely in your browser.

## Demo
You can host it easily on GitHub Pages or any static hosting service. On GitHub Pages, your game will be available at:
```
https://<your-github-username>.github.io/mario/
```

## Features
- **Side-scrolling** with camera follow
- **Movement**: walk, run, jump (variable height)
- **Physics**: gravity, friction, acceleration
- **Enemies**: Goomba-style, stomp to defeat
- **Obstacles**: bricks, question blocks with coins, pipes, platforms, lava
- **Goal**: reach the flagpole
- **HUD**: score, coins, lives, world, time
- **Controls**: pause, restart, run

## Controls
| Key                  | Action               |
|----------------------|----------------------|
| ← / → or **A/D**     | Move left/right      |
| **Z** / Space / **W**| Jump                  |
| **X**                | Run                   |
| **P**                | Pause                 |
| **R**                | Restart               |

## How to Play Locally
1. Save the HTML file as `index.html`.
2. Open it in your browser.

## Deploy to GitHub Pages
1. Create a public GitHub repository (e.g., `mario`).
2. Add the `index.html` file to the repo and commit.
3. In **Settings → Pages**, set:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
4. Wait ~1 minute for deployment.
5. Open `https://<your-github-username>.github.io/mario/` in your browser.
