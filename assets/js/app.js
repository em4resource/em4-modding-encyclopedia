const articles = [
  {
    category: "Start Here",
    title: "What This Encyclopedia Is For",
    tags: ["workflow", "beginner", "reference"],
    body: `
      <p>This project is a practical Emergency 4 modding reference. It is meant to explain how EM4 thinks: prototypes define things, maps place things, scripts command things, specs tune systems, and UI/audio make the player understand what happened.</p>
      <p>The site is built as plain HTML, CSS, and JavaScript so it works on GitHub Pages without a build step. Open <code>index.html</code> locally or publish this folder as a repository.</p>
    `
  },
  {
    category: "Start Here",
    title: "Recommended Modding Workflow",
    tags: ["testing", "backups", "debugging"],
    body: `
      <ul>
        <li>Keep one working backup of any script that took time to fix.</li>
        <li>Edit in a staging folder, then copy into <code>Scripts/Game/Command</code> or <code>Scripts/Game/Mission</code>.</li>
        <li>Change one feature at a time, load the editor or game, then check <code>logfile.txt</code>.</li>
        <li>If the game crashes with no useful error, temporarily remove the newest DDS/TGA icons and the newest script first.</li>
        <li>When a script works, save a clean backup before adding more features.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "What You Need Before Modding",
    tags: ["beginner", "tools", "setup"],
    body: `
      <p>Emergency 4 modding is mostly file management, editor work, and script testing. You do not need a modern game engine workflow, but you do need patience and clean backups.</p>
      <ul>
        <li>A working Emergency 4 or 911: First Responders install.</li>
        <li>The Emergency 4 editor, usually launched from the game directory.</li>
        <li>A text editor such as Notepad++ for <code>.script</code>, <code>.xml</code>, and notes.</li>
        <li>A DDS-capable image editor or converter for command icons, cursor icons, and textures.</li>
        <li>A folder outside the live mod for backups, experiments, and old working versions.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "How to Install a Mod",
    tags: ["install", "mods", "modinstaller"],
    body: `
      <p>Most EM4 mods are installed either through the ModInstaller or by copying a finished mod folder into the game's <code>Mods</code> directory. The exact location depends on your game install.</p>
      <ul>
        <li>If the mod is a packaged installer file, open it with the EM4 ModInstaller and let it install into the game.</li>
        <li>If the mod is already a folder, place the entire folder inside <code>Emergency 4/Mods</code> or <code>911 First Responders/Mods</code>.</li>
        <li>Do not copy only the scripts or prototypes from a full mod unless the mod author specifically says to do that.</li>
        <li>Launch the game, open the Modifications menu, select the mod, and wait for it to load.</li>
        <li>If the game crashes during loading, check <code>logfile.txt</code> and confirm the mod folder is not nested twice, such as <code>Mods/MyMod/MyMod/Specs</code>.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "How to Load a Mod in the Editor",
    tags: ["editor", "load mod", "map"],
    body: `
      <p>The editor does not automatically edit your mod unless you load it. Always confirm the correct mod is active before changing maps, prototypes, or commands.</p>
      <ul>
        <li>Start the Emergency 4 editor.</li>
        <li>Choose <code>Modifications</code>, then load your mod.</li>
        <li>Wait for the editor to finish loading before opening maps or prototypes.</li>
        <li>Use the prototype editor to assign commands to persons, vehicles, and objects.</li>
        <li>Use the map editor to place virtual objects, spawn points, paths, traffic lights, and control panels.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "First Safe Edit to Practice",
    tags: ["practice", "commands", "testing"],
    body: `
      <p>A good first edit is assigning an existing command to a copied prototype. This teaches the editor workflow without changing script logic.</p>
      <ul>
        <li>Copy or duplicate a vehicle prototype inside the mod.</li>
        <li>Open the prototype in the editor and add a known working command.</li>
        <li>Save the prototype, load freeplay, and confirm the command appears.</li>
        <li>If it does not show, check whether the command has restrictions, whether the vehicle needs a passenger, and whether the script loaded without errors.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "How to Read logfile.txt",
    tags: ["logfile", "errors", "crashes"],
    body: `
      <p><code>logfile.txt</code> is the first place to look after a crash or missing command. The most useful lines usually appear near the bottom, shortly before the game exits or reports that a script could not load.</p>
      <ul>
        <li><code>Could not load script</code> means the file has a parser error or missing symbol.</li>
        <li><code>cursor ... not found</code> means the command references an icon or cursor file that is missing or misnamed.</li>
        <li><code>Symbol ... is not defined</code> usually means a helper function, variable, or command name is being called in the wrong scope.</li>
        <li><code>Statement too long</code> means a string or function call must be split into smaller pieces.</li>
        <li>A crash with only a listener warning often means the real issue happened earlier, or a bad DDS/TGA asset was loaded.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "Backup Strategy That Saves Hours",
    tags: ["backup", "versions", "safe workflow"],
    body: `
      <p>EM4 modding rewards boring backups. When something works, freeze it before improving it. This matters most for scripts, DDS icons, and mission logic.</p>
      <ul>
        <li>Keep folders named by feature, such as <code>AutoSiren Working Backup</code> or <code>M4 backup</code>.</li>
        <li>Back up a script before changing spawn logic, command visibility, or action queues.</li>
        <li>Back up working DDS icons before remaking or resizing them.</li>
        <li>Keep original scripts from base or old versions in a separate folder for comparison.</li>
        <li>When a new crash appears, remove the newest files first rather than rewriting unrelated systems.</li>
      </ul>
    `
  },
  {
    category: "Folder Structure",
    title: "Important Emergency 4 Folders",
    tags: ["folders", "mod layout"],
    body: `
      <ul>
        <li><code>Scripts/Game/Command</code>: commands attached to persons, vehicles, and objects.</li>
        <li><code>Scripts/Game/Mission</code>: mission and freeplay control scripts such as <code>fp_freeplay.script</code>.</li>
        <li><code>Prototypes</code>: editable game entities, usually <code>.e4p</code>.</li>
        <li><code>Models</code>: model files and textures used by prototypes.</li>
        <li><code>Specs</code>: XML files for units, portraits, freeplay parameters, and system tuning.</li>
        <li><code>UI/Game/Icons/Commands</code>: command icons.</li>
        <li><code>UI/Game/Icons/Cursor</code>: cursor icons shown when a command targets something.</li>
        <li><code>Audio/FX</code>: short wav effects and dispatch audio.</li>
      </ul>
    `
  },
  {
    category: "Scripting",
    title: "How EM4 Command Scripts Work",
    tags: ["commands", "checkpossible", "checktarget"],
    body: `
      <p>Most gameplay buttons are command classes. A command usually contains <code>CheckPossible</code>, <code>CheckTarget</code>, and <code>PushActions</code>. EM4 asks if a button should show, asks if the clicked target is valid, then runs action logic.</p>
      <pre><code>object VcmdExample : CommandScript
{
    VcmdExample()
    {
        SetIcon("VcmdExample");
        SetCursor("VcmdExample");
        SetRestrictions(RESTRICT_SELFEXECUTE);
    }

    bool CheckPossible(GameObject *Caller)
    {
        return Caller->IsValid();
    }

    bool CheckTarget(GameObject *Caller, Actor *Target, int childID)
    {
        return Target->IsValid();
    }

    void PushActions(GameObject *Caller, Actor *Target, int childID)
    {
        Mission::PlayHint("Command executed.");
    }
};</code></pre>
    `
  },
  {
    category: "Scripting",
    title: "Parser Rules That Prevent Crashes",
    tags: ["cint", "errors", "parser"],
    body: `
      <ul>
        <li>Always end branches with an explicit <code>return false;</code> if no other return is guaranteed.</li>
        <li>Avoid duplicate variable names in the same function block. EM4 can be stricter than modern C++.</li>
        <li>Keep long strings and long function calls short. Use temp variables when the log says a statement or argument is too long.</li>
        <li>Do not rely on helper functions being visible if EM4 complains they are not in scope. Move small helpers into the command class or call them through a dummy command.</li>
        <li>Prefer simple command chains over deeply nested logic.</li>
      </ul>
    `
  },
  {
    category: "Scripting",
    title: "Actions, Delays, and Why Timing Matters",
    tags: ["actions", "wait", "sequencing"],
    body: `
      <p>EM4 commands are action queues. A vehicle or person can move, wait, turn, enter, exit, or execute a dummy command later. This is how you create multi-step roleplay such as booking, court, jail transport, or a detective investigation.</p>
      <p>Use <code>ACTION_NEWLIST</code> when you want to replace the current queue. Use <code>ACTION_APPEND</code> when you want the next step to happen after earlier actions finish.</p>
      <pre><code>p.PushActionMove(ACTION_NEWLIST, TargetPos);
p.PushActionTurnTo(ACTION_APPEND, Target);
p.PushActionWait(ACTION_APPEND, 3.0f);
p.PushActionExecuteCommand(ACTION_APPEND, "DummyNextStep", &p, 0, false);</code></pre>
    `
  },
  {
    category: "Maps",
    title: "Virtual Objects",
    tags: ["VO", "map", "placement"],
    body: `
      <p>Virtual objects are invisible named areas placed in the editor. Scripts use them as spawn zones, parking spots, control panels, investigation areas, staging points, and alarm zones.</p>
      <ul>
        <li>Use clear names like <code>station1_engine4052</code>, <code>station1_engine4052_turnto</code>, or <code>homicide_lead01</code>.</li>
        <li>Use separate VOs for parking and turning when facing direction matters.</li>
        <li>Large search or alarm areas should use multiple markers if minimap behavior is limited.</li>
        <li>Keep spawn VOs away from walls, fences, locked buildings, and tight props.</li>
      </ul>
    `
  },
  {
    category: "Maps",
    title: "Paths, Spawn Points, and Exits",
    tags: ["paths", "traffic", "return to base"],
    body: `
      <p>Traffic and returning units depend on map paths and entry/exit definitions. For player-controlled vehicles leaving the map, EM4's native <code>PushActionReturnToBase</code> is often safer than trying to manually route to a guessed exit VO.</p>
      <p>If a civilian or suspect vehicle must leave after a traffic stop, convert it into a role that can exit, clear its current queue, and let the engine use the map's return logic.</p>
    `
  },
  {
    category: "Prototypes",
    title: "What Prototypes Control",
    tags: ["e4p", "traits", "commands"],
    body: `
      <p>A prototype stores object traits, model links, physics, lights, doors, commands, child objects, and unit behavior. If a command never appears, check the prototype first: the script can be perfect and still never show if the command is not assigned.</p>
      <ul>
        <li>Vehicles need correct vehicle type and role for transport, command, and return logic.</li>
        <li>Persons need the right person type and assigned person commands.</li>
        <li>Deployable equipment is often easier as a vehicle prototype when it needs selectable commands.</li>
      </ul>
    `
  },
  {
    category: "UI and Icons",
    title: "Command Icons and Cursor Icons",
    tags: ["dds", "icons", "cursor"],
    body: `
      <p>Icons are fragile in EM4. A bad DDS can crash the editor or load as a white box. Keep command and cursor files in the expected folders and use the same visible-area discipline as working icons from your mod.</p>
      <ul>
        <li>Command icon path: <code>UI/Game/Icons/Commands/VcmdName.dds</code>.</li>
        <li>Cursor icon path: <code>UI/Game/Icons/Cursor/VcmdName.dds</code>.</li>
        <li>The file name must match <code>SetIcon</code> and <code>SetCursor</code>.</li>
        <li>Use transparent padding so the symbol is not cropped in-game.</li>
        <li>If the icon appears white or crashes loading, remake it with a known-good DDS format.</li>
      </ul>
    `
  },
  {
    category: "UI and Icons",
    title: "EM4 Menu Look",
    tags: ["design", "menu", "github pages"],
    body: `
      <p>The base UI uses compact panels, beveled buttons, dark blue-grey surfaces, orange command highlights, and small dense typography. This encyclopedia recreates that feel with original CSS so it can be published publicly without redistributing base-game UI artwork.</p>
      <p>If this is for a private team repo, you can add your own screenshots or legally usable images later in <code>assets/img</code>.</p>
    `
  },
  {
    category: "Audio",
    title: "Dispatch and Radio Audio",
    tags: ["wav", "dispatch", "notifications"],
    body: `
      <p>Short radio audio works best. A good script usually pairs audio with both a top ticker message and white on-screen help text. For global dispatch, use global playback functions rather than positional sound tied to the caller.</p>
      <ul>
        <li>Keep filenames clear, for example <code>Homicide_Suspect_In_Custody.wav</code>.</li>
        <li>Avoid overlapping audio by delaying second messages or using one combined audio file.</li>
        <li>Make dispatch wording generic if the event can spawn anywhere.</li>
      </ul>
    `
  },
  {
    category: "Freeplay and Missions",
    title: "Freeplay Scripts vs Mission Scripts",
    tags: ["fp_freeplay", "missions", "callouts"],
    body: `
      <p>Freeplay is the normal random-call environment. Mission scripts can control more exact story flow, camera, objectives, and staged events. A mod can still use mission-style logic inside a freeplay support script, but <code>fp_freeplay.script</code> is the important file if you need code to run automatically in freeplay.</p>
      <p>Custom callouts usually need one system/updater object or a mission/freeplay hook so the script can check timers and mission state.</p>
    `
  },
  {
    category: "Freeplay and Missions",
    title: "Custom Callout Design",
    tags: ["callouts", "scheduler", "roleplay"],
    body: `
      <p>A deep custom callout should track state: not started, dispatched, investigated, suspect found, suspect transported, victim removed, complete. The player should always understand the next step through ticker text, white help text, audio, and map markers when appropriate.</p>
      <ul>
        <li>Do not let two custom calls start at the same time unless intentionally designed.</li>
        <li>Check whether a freeplay event is already active before starting a custom scenario.</li>
        <li>Use randomized dispatch text, but keep location descriptions generic unless the script knows the location.</li>
      </ul>
    `
  },
  {
    category: "Case Studies",
    title: "Fuel and Water Supply Systems",
    tags: ["fuel", "water", "resource systems"],
    body: `
      <p>Resource systems add value by blocking or warning player actions when a vehicle lacks fuel, water, or another supply. The clean pattern is a command to check level, a dummy state to track thresholds, and a refill action tied to known map objects or VOs.</p>
      <p>Good notifications are immediate, capitalized, and actionable: <code>Fuel Level: 20%. Refuel vehicle at nearest gas station.</code></p>
    `
  },
  {
    category: "Case Studies",
    title: "Advanced Custody and Court Processing",
    tags: ["police", "custody", "court"],
    body: `
      <p>A multi-stop custody script can turn a simple arrest into a roleplay chain: booking at the station, transport to courthouse, judge decision, release or jail intake. The key is storing charges and status on the suspect with dummy commands so later scripts know what happened earlier.</p>
    `
  },
  {
    category: "Case Studies",
    title: "Traffic Stops and MDT Roleplay",
    tags: ["MDT", "traffic stop", "police"],
    body: `
      <p>An MDT system should save generated plate, driver, warrant, and stop data on the target vehicle so repeated checks are consistent. Traffic stops work best as staged action chains: stop vehicle, position cruiser, radio plate, officer approaches window, then player chooses citation, step-out, tow, release, or arrest.</p>
    `
  },
  {
    category: "Case Studies",
    title: "Fire Alarms and Building Panels",
    tags: ["alarms", "panels", "objects"],
    body: `
      <p>Alarm systems become immersive when each panel is tied to specific alarm objects, lights, zones, and separate acknowledge/silence commands. The player should need the right unit near the right panel before the system quiets down.</p>
    `
  },
  {
    category: "Troubleshooting",
    title: "Common Log Errors",
    tags: ["crash", "logfile", "debugging"],
    body: `
      <ul>
        <li><code>Symbol X is not defined in current scope</code>: helper or variable is not visible where used.</li>
        <li><code>already declared as different type</code>: duplicate local variable name or parser confusion.</li>
        <li><code>Statement too long</code>: split strings or arguments into temp variables.</li>
        <li><code>cursor ... not found</code>: missing DDS/TGA cursor file or wrong icon name.</li>
        <li><code>global listener object is still registered</code>: often appears during crashes; inspect the newest script and newest DDS first.</li>
      </ul>
    `
  },
  {
    category: "GitHub",
    title: "How to Publish This on GitHub Pages",
    tags: ["github", "pages", "hosting"],
    body: `
      <ul>
        <li>Create a new GitHub repository, for example <code>em4-modding-encyclopedia</code>.</li>
        <li>Upload this folder's contents to the repository root.</li>
        <li>Go to repository Settings, then Pages.</li>
        <li>Set Source to <code>Deploy from a branch</code>, choose <code>main</code>, and choose <code>/root</code>.</li>
        <li>GitHub will give you a public URL after the first deploy.</li>
      </ul>
    `
  },
  {
    category: "GitHub",
    title: "How to Grow the Encyclopedia",
    tags: ["articles", "contributing", "structure"],
    body: `
      <p>Add new entries in <code>assets/js/app.js</code>. Keep each article focused: one concept, one problem, one pattern, or one case study. Add screenshots only if you own them or have permission to publish them.</p>
      <p>When documenting a script, include what command it adds, where the command is assigned, what VOs it needs, what audio/icons it uses, and what known failure modes exist.</p>
    `
  }
];

const categories = ["All", ...Array.from(new Set(articles.map(article => article.category)))];
let activeCategory = "All";

const categoryList = document.getElementById("categoryList");
const articleGrid = document.getElementById("articleGrid");
const articleTitle = document.getElementById("articleTitle");
const articleCounter = document.getElementById("articleCounter");
const searchBox = document.getElementById("searchBox");
const template = document.getElementById("articleTemplate");

function articleMatches(article, query) {
  if (activeCategory !== "All" && article.category !== activeCategory) {
    return false;
  }

  if (!query) {
    return true;
  }

  const haystack = [
    article.category,
    article.title,
    article.tags.join(" "),
    article.body.replace(/<[^>]+>/g, " ")
  ].join(" ").toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function renderCategories() {
  categoryList.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `menu-button${category === activeCategory ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategories();
      renderArticles();
    });
    categoryList.appendChild(button);
  });
}

function renderArticles() {
  const query = searchBox.value.trim();
  const visible = articles.filter(article => articleMatches(article, query));

  articleGrid.innerHTML = "";
  articleTitle.textContent = activeCategory === "All" ? "All Entries" : activeCategory;
  articleCounter.textContent = `${visible.length} entr${visible.length === 1 ? "y" : "ies"}`;

  visible.forEach((article, index) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".article-card");
    const title = node.querySelector(".article-title");
    const body = node.querySelector(".article-body");

    title.textContent = article.title;
    body.innerHTML = `${article.body}<div class="tag-row">${article.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>`;

    if (index === 0) {
      card.classList.add("open");
    }

    title.addEventListener("click", () => {
      card.classList.toggle("open");
    });

    articleGrid.appendChild(node);
  });
}

searchBox.addEventListener("input", renderArticles);

renderCategories();
renderArticles();
