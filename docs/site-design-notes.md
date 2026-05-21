# Site Design Notes

The first version of the site was readable, but it did not feel enough like Emergency 4. This version moves closer to the base game menu structure.

## Base Game UI References

The design was informed by these base game UI files:

- `Data/UI/Game/MainMenu/mainmenu.xml`
- `Data/UI/Game/MainMenu/mainmenu_templates.xml`
- `Data/UI/Game/BaseWindow/basewindow.xml`

Useful observations:

- The main menu is built around a `1024x768` dialog.
- The title text uses a bright cyan color.
- Buttons are compact and rectangular, not modern rounded cards.
- Main menu buttons have separate visual states: normal, hover, pressed, and disabled.
- Button file names commonly use `_on`, `_ov`, `_cl`, and `_dis`.
- Text is dense, with tight spacing.
- Base windows use compact tabs, objective rows, toggles, and scrollable content.
- The menu presentation feels like an in-game terminal or command interface rather than a modern documentation website.

## Public Repository Safety

The site now uses converted PNG versions of the base game's DDS UI files for a closer 911: First Responders / EM4 menu match. It also keeps CSS fallback styling for layout, text, and responsiveness.

This is visually more accurate, but less safe for a public GitHub repository. If the repo is public, only publish the converted game UI assets if you are comfortable with the copyright risk or have permission.
