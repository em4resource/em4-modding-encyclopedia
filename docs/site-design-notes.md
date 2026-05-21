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

## Public Repository Safety

The site imitates the EM4 menu style with original CSS. It does not include the base game's DDS menu files.

That makes it safer to publish publicly on GitHub. If you want screenshots or original game art in the future, only add assets you have permission to publish.
