const articles = [
  {
    category: "Start Here",
    title: "Command Briefing",
    tags: ["game overview", "beginner", "encyclopedia"],
    body: `
      <p><code>Emergency 4: Global Fighters for Life</code>, released in North America as <code>911: First Responders</code>, is a real-time emergency management game about commanding fire, EMS, police, and technical rescue resources. The player coordinates units, vehicles, equipment, rescues, arrests, evacuation, treatment, transport, and incident resolution from an overhead command view.</p>
      <p>The game remains active because its editor, prototype system, map tools, script system, UI files, audio folders, and mod structure allow players to build local departments, custom maps, new missions, roleplay systems, and full conversions.</p>
      <p>This encyclopedia documents installation, editor use, assets, maps, prototypes, scripting, SDK behavior, troubleshooting, and case studies from real Emergency 4 scripts.</p>
    `
  },
  {
    category: "EM4 History",
    title: "Game and Mod Release Timeline",
    tags: ["history", "mods", "timeline", "downloads"],
    body: `
      <p><code>Emergency 4</code> released in Europe in 2006, and <code>911: First Responders</code> followed as the North American title in 2007. The Deluxe edition added additional content and voice-command support. The editor and mod folder structure turned the game into a long-running platform for custom departments, maps, scripts, and roleplay projects.</p>
      <p>Public community filebases show how the scene continued long after release. The dates below are download-page publication or version dates where visible publicly, not necessarily the original start date of each project.</p>
      <table>
        <thead><tr><th>Date</th><th>Release or event</th><th>Why it matters</th></tr></thead>
        <tbody>
          <tr><td>2006</td><td><code>Emergency 4</code> European release.</td><td>Established the editor, map, prototype, mission, and script base used by later mods.</td></tr>
          <tr><td>2007</td><td><code>911: First Responders</code> North American release.</td><td>Brought the game to a wider English-speaking audience and modding community.</td></tr>
          <tr><td>2012</td><td>Bieberfelde Multiplayer origin, according to its public EM-Hub filebase description.</td><td>Shows early development of multiplayer-focused roleplay concepts.</td></tr>
          <tr><td>2015</td><td>Bieberfelde Multiplayer concept referenced by Fuchsburg as a foundation for its multiplayer design.</td><td>Represents a major shift toward organized multiplayer and realistic service workflows.</td></tr>
          <tr><td>17 Nov 2023</td><td>Bieberfelde Multiplayer 1.2 published on EM-Hub.</td><td>Public filebase entry describes it as an Emergency 4 multiplayer modification for up to four players.</td></tr>
          <tr><td>5 Mar 2024</td><td>Bieberfelde RetroFitting v1.0.3 final published on EM-Hub.</td><td>Large modern release with new objects, buildings, scripts, stations, vehicle concepts, alarm behavior, and performance improvements.</td></tr>
          <tr><td>21 Oct 2024 / 26 Apr 2025</td><td>SDIS Em4 Mod public filebase page and version 4.5 entry.</td><td>Example of international Emergency 4 development outside German/English-only scenes.</td></tr>
          <tr><td>10 May 2025</td><td>Bieberfelde Submod Bayern 2.0 published on EM-Hub.</td><td>Shows the continuing submod culture around established projects.</td></tr>
          <tr><td>27 Aug 2025</td><td>Leszno Modification 1.0.0 published on EM-Hub.</td><td>Example of regional multiplayer projects continuing into the mid-2020s.</td></tr>
        </tbody>
      </table>
      <p><strong>Sources:</strong> <a href="https://em-hub.de/filebase/" target="_blank" rel="noreferrer">EM-Hub filebase</a>, <a href="https://em-hub.de/filebase/file/344-bieberfelde-multiplayer/" target="_blank" rel="noreferrer">Bieberfelde Multiplayer</a>, <a href="https://em-hub.de/filebase/file/61-bieberfelde-retrofitting-v1-0-3-final/" target="_blank" rel="noreferrer">Bieberfelde RetroFitting</a>, <a href="https://em-hub.de/filebase/file/580-sdis-em4-mod/" target="_blank" rel="noreferrer">SDIS Em4 Mod</a>, <a href="https://em-hub.de/filebase/file/650-emergency-4-bieberfelde-submod-bayern-2-0/" target="_blank" rel="noreferrer">Bieberfelde Submod Bayern</a>, <a href="https://em-hub.de/filebase/file/676-leszno-modificattion-emergency-4-deluxe/" target="_blank" rel="noreferrer">Leszno Modification</a>.</p>
    `
  },
  {
    category: "EM4 History",
    title: "Emergency Planet",
    tags: ["history", "Emergency Planet", "English community", "downloads"],
    body: `
      <p>Emergency Planet is one of the most important English-language homes for Emergency 4 and 911: First Responders modding. Public forum records show long-running sections for Emergency 4 general discussion, multiplayer, technical support, mission support, modding support, European modding, downloads, tutorials, galleries, and dedicated mod areas.</p>
      <p>Its importance comes from being both a help forum and an archive. A player could find troubleshooting threads, download released mods, follow work-in-progress projects, ask script questions, and learn from older discussions. The Los Angeles Mod area is especially important historically because LA Mod became one of the reference points for American-style EM4 modding, station scripting, custom commands, and freeplay roleplay.</p>
      <p>Emergency Planet also reflects the aging of the community. The forum still shows active Emergency 4 sections, but discussion volume is smaller than the peak years. That is normal for a 2006-era game. The important point for modders is that older Emergency Planet threads often preserve the reasoning behind fixes: why a command needs a prototype flag, why <code>fp_freeplay.script</code> is used as a startup script, why icons fail, or why a script loads but the command stays hidden.</p>
      <h3>Public archive role</h3>
      <ul>
        <li>Finding old support answers and modding patterns.</li>
        <li>Studying how major English-language mods were released and supported.</li>
        <li>Understanding LA Mod-era scripting conventions that many other American mods inherited.</li>
        <li>Recovering context for older script names, command names, and prototype setups.</li>
      </ul>
      <p><strong>Public reference:</strong> <a href="https://www.emergency-planet.com/forum/24-emergency-4/" target="_blank" rel="noreferrer">Emergency Planet Emergency 4 forum</a>.</p>
    `
  },
  {
    category: "EM4 History",
    title: "Emergency-Forum.de",
    tags: ["history", "Emergency-Forum.de", "German community", "archive"],
    body: `
      <p>Emergency-Forum.de was a major German-language community hub for the EMERGENCY series, Notruf 112, rescue simulations, and modding. Public search records and site metadata describe it as a fan forum for the EMERGENCY series, with Emergency 4 boards, modification boards, filebase areas, lexicon/FAQ content, and support discussions.</p>
      <p>For many years, German-speaking EM4 modding was one of the deepest parts of the scene. Large European projects, complex station systems, specialized vehicle scripts, and roleplay-heavy fire/EMS concepts were often discussed or showcased through German forums. Even when individual links disappear, old references to Emergency-Forum.de still appear in mod readmes, YouTube descriptions, download pages, model credits, and support threads.</p>
      <p>The practical lesson is that Emergency-Forum.de functioned like a memory bank for the German side of the community. When forums close or become hard to access, the community loses more than downloads. It loses tutorials, credits, explanations, bug reports, and the small comments that explain why a script was written a certain way.</p>
      <h3>Why it matters to modders</h3>
      <ul>
        <li>Many German and European modding ideas spread through forum posts rather than formal documentation.</li>
        <li>Old model, texture, and script credits may point back to Emergency-Forum.de threads.</li>
        <li>The loss or partial loss of forum access is a reminder to preserve documentation locally and credit authors clearly.</li>
        <li>Modern guides need direct explanations because old forum links do not always remain available.</li>
      </ul>
      <p><strong>Public reference:</strong> <a href="https://emergency-forum.de.usitestat.com/" target="_blank" rel="noreferrer">public site record for emergency-forum.de</a>.</p>
    `
  },
  {
    category: "EM4 History",
    title: "EM4Resource",
    tags: ["history", "EM4Resource", "wiki", "support"],
    body: `
      <p>EM4Resource represents a newer style of Emergency 4 community space: less like a single old forum thread archive, and more like a focused support, wiki, Discord, and resource hub. Its public homepage describes EM4Resource as a place for Emergency 4 mods, tutorials, and support, with ongoing wiki updates and community help.</p>
      <p>Historically, this matters because newer EM4 players often arrive after the old forum era. They may not know where LA Mod support threads were, what German forums existed, or why certain scripts are copied from older mods. A resource site can bridge that gap by turning scattered knowledge into articles, downloads, tutorials, and more direct explanations.</p>
      <p>Its focus is preservation through practical guides, SDK explanations, roleplay script documentation, troubleshooting notes, support, and modding resources that remain easier to find than old scattered forum posts.</p>
      <h3>What it is useful for</h3>
      <ul>
        <li>Modern tutorials and wiki-style documentation.</li>
        <li>Game support for current players trying to run EM4 on modern systems.</li>
        <li>Community discussion around mods, scripting, prototypes, icons, audio, and troubleshooting.</li>
        <li>Preserving lessons learned from custom systems such as fuel, water supply, callouts, custody, drones, stations, and MDT-style roleplay.</li>
      </ul>
      <p><strong>Public reference:</strong> <a href="https://www.em4resource.com/" target="_blank" rel="noreferrer">EM4Resource homepage</a>.</p>
    `
  },
  {
    category: "EM4 History",
    title: "EM-Hub.de",
    tags: ["history", "EM-Hub", "German community", "modern forum"],
    body: `
      <p>EM-Hub.de is a modern German-language community project for the EMERGENCY scene. Public pages describe it as a community project by known faces from the EMERGENCY scene, including former forum members, modders, and streamers. Its slogan is community-focused, and its visible structure includes boards for Emergency Hub news/support, the EMERGENCY series, Emergency 4, Emergency 5/2016/2017/20, modding, showrooms, support, files, and a lexicon.</p>
      <p>Its Emergency 4 area matters because it continues the German tradition of detailed modding discussion while using a newer platform. Public board data shows active sections for general Emergency 4 discussion, support, modding, showrooms, and modding teams. That makes it one of the modern places where players can still ask how to install mods, repair errors, discuss prototypes, find tools, or showcase projects.</p>
      <p>EM-Hub also shows how the community evolved after older forums became less central. Instead of relying only on long forum threads, modern hubs often combine forums, filebases, lexicons, Discord-style community behavior, project showcases, and support posts.</p>
      <h3>Modern hub role</h3>
      <ul>
        <li>Modern EM4 documentation is most useful when it is searchable, stable, and organized by topic.</li>
        <li>Lexicon/wiki articles are valuable because they turn repeated support answers into stable references.</li>
        <li>Showroom and team areas help keep modding visible even when full releases are rare.</li>
        <li>Community continuity matters: newer hubs often inherit people, practices, and lessons from older forums.</li>
      </ul>
      <p><strong>Public reference:</strong> <a href="https://em-hub.de/forum/" target="_blank" rel="noreferrer">Emergency Hub forum</a> and <a href="https://em-hub.de/forum/board/30-emergency-4/" target="_blank" rel="noreferrer">Emergency 4 board</a>.</p>
    `
  },
  {
    category: "Start Here",
    title: "How the Game Is Put Together",
    tags: ["mental model", "architecture", "beginner"],
    body: `
      <p>Most EM4 modding problems become easier once you understand the layers.</p>
      <table>
        <thead><tr><th>Layer</th><th>What It Does</th><th>Example Problem</th></tr></thead>
        <tbody>
          <tr><td>Map</td><td>Places roads, paths, VOs, objects, fire objects, exits, and spawn points.</td><td>A unit cannot find its station bay or a callout spawns inside a building.</td></tr>
          <tr><td>Prototype</td><td>Defines what an entity is, what model it uses, its commands, lights, doors, physics, and traits.</td><td>A command does not show or a vehicle has the wrong crew capacity.</td></tr>
          <tr><td>Model/Texture</td><td>Controls what the object looks like.</td><td>A vehicle appears white, invisible, or missing parts.</td></tr>
          <tr><td>Script</td><td>Controls actions, buttons, timers, callouts, missions, and custom logic.</td><td>A command appears but nothing happens when clicked.</td></tr>
          <tr><td>Specs/Units</td><td>Controls global XML data, unit browser entries, freeplay tuning, portraits, and metadata.</td><td>A prototype exists but does not appear correctly in the buy menu.</td></tr>
          <tr><td>UI/Audio</td><td>Controls icons, cursors, menus, sounds, and player feedback.</td><td>A button is a white box, a cursor is missing, or dispatch audio overlaps.</td></tr>
        </tbody>
      </table>
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
    category: "Start Here",
    title: "Encyclopedia Sections",
    tags: ["roadmap", "sections", "learning path"],
    body: `
      <p>The encyclopedia is organized so you can open only the area you need from the left menu.</p>
      <table>
        <thead><tr><th>Section</th><th>Use It For</th></tr></thead>
        <tbody>
          <tr><td>Getting Started</td><td>Installing mods, loading the editor, reading logs, first safe edits, and beginner workflow.</td></tr>
          <tr><td>EM4 History</td><td>Community history, Emergency Planet, Emergency-Forum.de, EM4Resource, and EM-Hub.de.</td></tr>
          <tr><td>Editor Manual</td><td>Scene mode, terrain, prototypes, paths, streets, spawn points, VOs, triggers, materials, radar maps.</td></tr>
          <tr><td>Mod Creation</td><td>Building vehicles, persons, deployables, equipment, custom callouts, and debugging broken layers.</td></tr>
          <tr><td>Folder Structure</td><td>What every major base game <code>Data</code> folder does and how mods mirror those folders.</td></tr>
          <tr><td>Asset Workshop</td><td>File formats, skinning, Blender prep, lighting, glass standards, RAL colors, and OpenHouse workflow.</td></tr>
          <tr><td>SDK Reference</td><td>What the SDK exposes to scripts: objects, persons, vehicles, commands, missions, UI, audio, camera, paths, and lists.</td></tr>
          <tr><td>SDK Glossary</td><td>Short searchable explanations of common SDK files and classes.</td></tr>
          <tr><td>Scripting</td><td>Command anatomy, parser limits, action queues, dummy commands, and timing.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Getting Started",
    title: "What You Need Before Modding",
    tags: ["beginner", "tools", "setup"],
    body: `
      <p>Emergency 4 modding is mostly file management, editor work, image editing, model preparation, and script editing. A small set of reliable tools is better than a large tool folder nobody understands.</p>
      <ul>
        <li>A working Emergency 4 or 911: First Responders install.</li>
        <li>The Emergency 4 editor, usually launched from the game directory with the editor parameter.</li>
        <li><strong>Notepad++</strong> for <code>.script</code>, <code>.xml</code>, readme files, notes, and logfile review.</li>
        <li><strong>DXTBmp</strong> for DDS inspection/conversion, especially older EM4 texture workflows.</li>
        <li><strong>Adobe Photoshop</strong>, Paint.NET, or GIMP for texture and icon editing. Photoshop is common in older workflows when paired with DDS support.</li>
        <li><strong>Blender</strong> for model work, plus a compatible EM4/V3O import-export addon where available.</li>
        <li>A DDS-capable workflow for command icons, cursor icons, skins, alpha channels, and UI assets.</li>
        <li>A folder outside the live mod for backups, experiments, and old working versions.</li>
      </ul>
    `
  },
  {
    category: "Scripting",
    title: "Beginner Scripting Learning Path",
    tags: ["tutorial flow", "beginner", "learning"],
    body: `
      <p>This is a scripting learning path, not the first-install path. Use it after the game, editor, and at least one working mod are already installed.</p>
      <ul>
        <li>Open a known working mod in the editor and inspect a vehicle prototype.</li>
        <li>Find where its commands are assigned.</li>
        <li>Find the matching command icon and cursor files.</li>
        <li>Open the matching command script and identify <code>CheckPossible</code>, <code>CheckTarget</code>, and <code>PushActions</code>.</li>
        <li>Place a virtual object on a test map and reference it from a small script.</li>
        <li>Only then build larger systems such as stations, alarms, dispatch callouts, traffic stops, or custody workflows.</li>
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
    title: "Emergency 4 Editor Basics",
    tags: ["editor", "beginner", "tools"],
    body: `
      <p>The editor is where most non-script modding happens. You use it to place map objects, create virtual objects, edit prototypes, assign commands, configure lights, add children, and save map changes.</p>
      <ul>
        <li>Prototype editing controls what an object is and what commands it has.</li>
        <li>Map editing controls where objects, virtual objects, paths, spawn points, and streets exist.</li>
        <li>Light editing controls vehicle lights, special lights, coronas, and scene lighting.</li>
        <li>Child objects are attached props or equipment pieces that move with a parent prototype.</li>
        <li>Fire objects define parts of a building or object that can burn.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "Common Mod Install Problems",
    tags: ["install", "troubleshooting", "mods"],
    body: `
      <ul>
        <li>The mod folder is nested twice. The game cannot find <code>Specs</code>, <code>Scripts</code>, or <code>Prototypes</code> where it expects them.</li>
        <li>The mod was installed for Emergency 4 Deluxe but you are using non-Deluxe, or the reverse.</li>
        <li>A required patcher or dependency was not installed.</li>
        <li>The game was installed in a protected folder and cannot write settings or save files.</li>
        <li>A bad DDS/TGA icon or broken script causes the mod to crash while loading.</li>
      </ul>
    `
  },
  {
    category: "Getting Started",
    title: "How to Ask for Help Effectively",
    tags: ["support", "logfile", "community"],
    body: `
      <p>Good support posts save everyone time. Include what you changed, what you expected, what happened, and the relevant log lines.</p>
      <ul>
        <li>Say whether the issue happens in the editor, on mod load, or during gameplay.</li>
        <li>Paste the exact script error and line number.</li>
        <li>Mention the command, prototype, VO, or map object involved.</li>
        <li>Say what you changed immediately before the bug started.</li>
        <li>Do not only say "it crashes." The log and last changed file matter.</li>
      </ul>
    `
  },
  {
    category: "Editor Manual",
    title: "Editor Manual Overview",
    tags: ["editor manual", "workflow", "map editor"],
    body: `
      <p>The official editor manual is one of the most important learning sources because it explains how the editor expects modders to work. The editor is not only a map placer. It creates mods, loads mods, edits terrain, places scene objects, edits prototypes, manages paths and streets, places virtual objects, controls map properties, and sets mission conditions.</p>
      <p>The most important lesson from the manual is that EM4 separates <code>prototype settings</code> from <code>instance settings</code>. Prototype settings affect every object using that prototype. Instance settings affect only the selected placed object and are stored in the map.</p>
    `
  },
  {
    category: "Editor Manual",
    title: "Creating a New Mod in the Editor",
    tags: ["create mod", "modifications", "editor"],
    body: `
      <p>The manual's first workflow is creating a new mod from the editor. Use the <code>Modifications</code> menu, create a new mod, name it, then load it through the same menu. Once loaded, changes made for that mod are stored in the new mod folder under the game's <code>Mods</code> directory.</p>
      <ul>
        <li>Create the mod before building a mission or map.</li>
        <li>Load the mod before editing its content.</li>
        <li>Confirm the switch-mod dialog when changing active mods.</li>
        <li>Keep base game files untouched whenever possible.</li>
      </ul>
    `
  },
  {
    category: "Editor Manual",
    title: "Editing 3D Objects and V3O Files",
    tags: ["v3o", "models", "pack unpack"],
    body: `
      <p>EM4 model files use <code>.v3o</code>. The editor manual explains that these models are normally stored as binary data. To edit a model as text, use the editor's <code>unpack file</code> function from the <code>Modifications</code> menu. After editing, use <code>pack file</code> to convert it back.</p>
      <p>Important caution: unpacking or packing overwrites the file while keeping the same filename. Always make a backup before touching model files.</p>
    `
  },
  {
    category: "Editor Manual",
    title: "Terrain Textures and Height Editing",
    tags: ["terrain", "textures", "heightmap"],
    body: `
      <p>Terrain editing is accessed through <code>Edit / Terrain</code>, function key <code>F2</code>. Existing terrain textures can be loaded from maps, or custom terrain textures can be imported.</p>
      <ul>
        <li>Custom terrain texture width and height should be multiples of 512 pixels.</li>
        <li>The texture should be a 24-bit TGA file.</li>
        <li>The manual lists the maximum terrain texture size as roughly 8192 by 8192 pixels.</li>
        <li>The scale is about 12.5 pixels per meter.</li>
        <li>Height can be edited with terrain brushes or prepared as a black-and-white height map.</li>
        <li>Masks can protect areas from terrain brush edits or restrict edits to specific areas.</li>
      </ul>
    `
  },
  {
    category: "Editor Manual",
    title: "Scene Mode Controls",
    tags: ["scene mode", "F1", "editor controls"],
    body: `
      <p><code>Scene</code> mode is function key <code>F1</code>. This is where you place available objects into the map, edit prototype settings, and edit instance settings.</p>
      <ul>
        <li>Left mouse selects, places, or moves objects.</li>
        <li><code>Alt</code> plus left mouse raises or lowers along the Z axis, depending on placement settings.</li>
        <li>Right mouse rotates around the local Z axis.</li>
        <li><code>Shift</code> or <code>Ctrl</code> plus right mouse rotates around world X or Y.</li>
        <li><code>Pause</code> toggles free-fly camera mode.</li>
        <li>Copy and paste objects in Scene mode with <code>Ctrl+C</code> and <code>Ctrl+V</code>.</li>
      </ul>
    `
  },
  {
    category: "Editor Manual",
    title: "Prototypes vs Instance Properties",
    tags: ["prototypes", "instances", "properties"],
    body: `
      <p>Prototypes are grouped into major classes such as objects, vehicles, persons, and houses. A prototype stores the predefined properties shared by every placed instance of that prototype.</p>
      <p>Instance properties are different. They are set on a specific placed object and saved into the map. This matters for things like path assignment, object-specific children, lights, or map-only variations.</p>
      <p>The manual recommends cloning prototypes before editing them. That keeps the original prototype intact and gives the modder a safer working copy.</p>
    `
  },
  {
    category: "Editor Manual",
    title: "Physics, Children, Fire Objects, and Lights",
    tags: ["physics", "children", "fireobjects", "lights"],
    body: `
      <table>
        <thead><tr><th>Editor Feature</th><th>What It Controls</th><th>Why Modders Care</th></tr></thead>
        <tbody>
          <tr><td>Physics</td><td>Collision and routefinder geometry.</td><td>Bad physics can block people, trap vehicles, or make deployables unusable.</td></tr>
          <tr><td>Children</td><td>Attached child objects on a prototype.</td><td>Used for visual variety, doors, wheels, interiors, roofs, equipment, and vehicle details.</td></tr>
          <tr><td>Fire Objects</td><td>Burnable regions, burn marks, fire effects, and radiation radius.</td><td>Required for buildings or objects that should burn correctly.</td></tr>
          <tr><td>Lights</td><td>Prototype lights with color, intensity, and behavior.</td><td>Controls emergency lights, special lights, scene lights, and object lighting.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Editor Manual",
    title: "Detail Polygons and Decals",
    tags: ["detail polygons", "decals", "map art"],
    body: `
      <p><code>Detail Polygons</code> add higher-detail textures to terrain areas. They can darken, lighten, or overlay areas depending on mode and are useful for visual map detail beyond the base terrain texture.</p>
      <p><code>Decals</code> are flat textures placed on the terrain. They are useful for road markings, manhole covers, stains, parking lines, signs painted on pavement, scene markings, and other flat details.</p>
    `
  },
  {
    category: "Editor Manual",
    title: "Paths, Streets, and Spawn Points",
    tags: ["paths", "streets", "spawn points", "traffic"],
    body: `
      <p>Paths and streets are separate systems. Paths are primarily for civilians and civilian vehicles. Streets are required for the emergency vehicle routefinder.</p>
      <ul>
        <li><code>Paths</code>: function key <code>F7</code>. Used by civilians and civilian cars. Path types include forward, backward, loop, and ping-pong behavior.</li>
        <li><code>Streets</code>: <code>Shift+F7</code>. Emergency vehicles need a connected street network where they are expected to drive.</li>
        <li><code>Spawn Points</code>: function key <code>F9</code>. Used to place persons or cars onto paths at fixed intervals with configured groups and probabilities.</li>
        <li>Vehicles and people drive or walk on the right side, represented by the blue line.</li>
      </ul>
    `
  },
  {
    category: "Editor Manual",
    title: "Map Properties, Entries, Exits, and Boundaries",
    tags: ["map properties", "entries", "exits", "boundaries"],
    body: `
      <p><code>Map Properties</code> are accessed with <code>Shift+F9</code>. They control light effects, weather effects, camera start position, entries and exits, level boundaries, travel map roads, mission scoring, budget, and camera positions.</p>
      <ul>
        <li>Entry and exit points define how land, air, and water vehicles enter or leave.</li>
        <li>Level boundaries control where the camera and map limits apply.</li>
        <li>The travel map controls which roads are treated as usable on the in-game map.</li>
        <li>Camera locations are mainly for scripted cutscenes.</li>
      </ul>
    `
  },
  {
    category: "Editor Manual",
    title: "Water Bodies and Virtual Objects",
    tags: ["water", "virtual objects", "terrain"],
    body: `
      <p><code>Liquid</code> mode is function key <code>F4</code>. Water can be displayed with shader effects, but boat-usable rivers or lakes should be level and paired with virtual objects marked as shallow or deep water.</p>
      <p><code>Virtual Objects</code> are function key <code>F5</code>. The manual describes them as areas used to control accessibility for moving prototypes such as vehicles, persons, animals, and ships. Terrain settings and <code>Specs/terrain.xml</code> influence how moving prototypes behave in those areas.</p>
      <p>Virtual objects can overlap, but blocked terrain has priority. In practice, modders also use VOs heavily for stations, parking spots, callouts, markers, panels, staging, and scripted interactions.</p>
    `
  },
  {
    category: "Editor Manual",
    title: "Waiting Points, Triggers, Ambient Sounds, and Fire Objects",
    tags: ["waiting points", "triggers", "ambient sounds", "burning objects"],
    body: `
      <table>
        <thead><tr><th>Tool</th><th>Shortcut</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Waiting Points</td><td><code>Shift+F3</code></td><td>Used by civilians on paths, with probability, duration, size, type, and line of sight.</td></tr>
          <tr><td>Triggers</td><td><code>F3</code></td><td>Areas used exclusively for script-controlled events.</td></tr>
          <tr><td>Ambient Polygons</td><td><code>Shift+F5</code></td><td>Define background sound areas.</td></tr>
          <tr><td>Additional Burning Objects</td><td><code>F6</code></td><td>Freely placed burning objects used to shape fire spread beyond prototype fire objects.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Editor Manual",
    title: "Mission Conditions and Materials",
    tags: ["mission conditions", "materials", "fire behavior"],
    body: `
      <p><code>Mission Conditions</code> define positive or negative conditions for mission success or failure. They can track objects, persons, civilians, emergency resources, drowning persons, gangsters, animals, vehicles, houses, burning objects, dead persons, injured persons, contaminated persons, and casualty counts.</p>
      <p><code>Materials</code> control fire behavior. Burnable objects need a material. Important material values include combustion, burn time, maximum temperature, charge time, cooling, resistance, blast force, blast radius, and whether the material explodes or burns when its combustion threshold is reached.</p>
    `
  },
  {
    category: "Editor Manual",
    title: "Loading, Saving, and Radar Maps",
    tags: ["maps", "e4m", "radar map"],
    body: `
      <p>Maps are loaded and saved through the top menu. Map-specific data is stored in an <code>.e4m</code> file. The map file references the floor texture but does not store the full texture view itself.</p>
      <p>The manual also describes creating radar maps by preparing the editor view, disabling clutter, positioning the free camera overhead, taking a screenshot, processing the image externally, and saving it as a DDS radar map. This explains why minimap/radar art is usually a separate asset workflow from normal map editing.</p>
    `
  },
  {
    category: "Mod Creation",
    title: "Creating a New Mod Safely",
    tags: ["new mod", "workflow", "editor"],
    body: `
      <p>A new EM4 mod should begin as a clean mod folder, not as random edits to base game files. The safest approach is to create a mod, copy only what you need, and keep the base game untouched.</p>
      <ul>
        <li>Create or install a mod folder under <code>Mods</code>.</li>
        <li>Mirror the base folder structure only where needed: <code>Scripts</code>, <code>Prototypes</code>, <code>Models</code>, <code>Specs</code>, <code>UI</code>, <code>Audio</code>, and <code>Units</code>.</li>
        <li>Load the mod in the editor before editing prototypes or maps.</li>
        <li>Keep a clean original backup and a working backup.</li>
        <li>Do not rename base command scripts unless you understand which prototypes call them.</li>
      </ul>
    `
  },
  {
    category: "Mod Creation",
    title: "Adding a Vehicle",
    tags: ["vehicles", "prototype", "units"],
    body: `
      <p>A vehicle is not only a model. It is a chain of assets and configuration.</p>
      <table>
        <thead><tr><th>Step</th><th>Folder</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Model and texture</td><td><code>Models</code></td><td>Visual vehicle mesh and paint.</td></tr>
          <tr><td>Prototype</td><td><code>Prototypes/Vehicles</code></td><td>Vehicle type, physics, doors, lights, passengers, transports, commands.</td></tr>
          <tr><td>Unit entry</td><td><code>Units/Vehicles</code></td><td>Buy menu and vehicle browser presentation.</td></tr>
          <tr><td>Specs</td><td><code>Specs</code></td><td>Vehicle metadata, portraits, and related global configuration.</td></tr>
          <tr><td>Commands</td><td><code>Scripts/Game/Command</code></td><td>Move, siren, get equipment, return to station, deploy tools, roleplay actions.</td></tr>
          <tr><td>Icons</td><td><code>UI/Game/Icons</code></td><td>Command buttons and cursors.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Mod Creation",
    title: "Adding a Person",
    tags: ["persons", "prototype", "commands"],
    body: `
      <p>A person prototype controls more than appearance. It determines what the unit can do, what equipment they can carry, whether they can arrest, heal, stabilize, use hoses, enter vehicles, or interact with custom systems.</p>
      <ul>
        <li>Place the visual files under <code>Models/Persons</code> or the mod's chosen model folder.</li>
        <li>Create or copy a prototype under <code>Prototypes/Persons</code>.</li>
        <li>Assign commands in the editor, not only in script.</li>
        <li>Confirm equipment commands pair correctly with drop/remove equipment commands.</li>
        <li>Test entering vehicles, exiting vehicles, picking up equipment, and restoring normal commands.</li>
      </ul>
    `
  },
  {
    category: "Mod Creation",
    title: "Adding Equipment or Deployables",
    tags: ["equipment", "deployable", "commands"],
    body: `
      <p>Equipment can be a carried item, a vehicle-carried object, or a deployable object placed on the map. Deployables are often easier to control if they are vehicle prototypes, because selectable vehicle prototypes can hold rotate, remove, and special commands more reliably.</p>
      <ul>
        <li>Create the deployed prototype.</li>
        <li>Create the person command that places it.</li>
        <li>Add rotate/remove commands to the deployed object if needed.</li>
        <li>If it stores tools, make sure get-equipment scripts treat it like a valid equipment source.</li>
        <li>Always test whether the person gets stuck inside the deployed object.</li>
      </ul>
    `
  },
  {
    category: "Mod Creation",
    title: "Building a Custom Callout",
    tags: ["callouts", "freeplay", "mission script"],
    body: `
      <p>A serious custom callout is a state machine. It should know what stage it is in and what must happen next.</p>
      <ul>
        <li>Dispatch stage: choose text, audio, location, marker, and spawned objects.</li>
        <li>Arrival stage: player reaches scene, discovers patient, hazard, suspect, or alarm panel.</li>
        <li>Investigation stage: player uses a command or unit to progress the incident.</li>
        <li>Resolution stage: victim transported, suspect jailed, hazard cleared, fire extinguished, or panel reset.</li>
        <li>Cleanup stage: remove markers, clear dummy commands, stop timers, and allow the next callout.</li>
      </ul>
      <p>Use command scripts for player interactions and mission/freeplay scripts for the timer/state logic.</p>
    `
  },
  {
    category: "Mod Creation",
    title: "Which Layer Is Broken?",
    tags: ["debugging", "workflow", "troubleshooting"],
    body: `
      <table>
        <thead><tr><th>Symptom</th><th>Likely Layer</th><th>First Check</th></tr></thead>
        <tbody>
          <tr><td>Command does not show</td><td>Prototype or command visibility</td><td>Command assigned? <code>CheckPossible</code> returns true? Icon exists?</td></tr>
          <tr><td>Command shows with red X</td><td>Targeting restrictions</td><td><code>CheckTarget</code>, command restrictions, caller/target type.</td></tr>
          <tr><td>Command clicks but nothing happens</td><td>Action queue or invalid target</td><td><code>PushActions</code>, dummy command names, action order.</td></tr>
          <tr><td>Crash on mod load</td><td>Script parse, XML, or UI asset</td><td>Newest script, missing symbol, DDS/TGA format, missing cursor.</td></tr>
          <tr><td>Vehicle will not move</td><td>Map, physics, or blocked path</td><td>Spawn position, collision, gates, pathing, stuck objects.</td></tr>
          <tr><td>Unit cannot enter vehicle</td><td>Command state or vehicle capacity</td><td>Normal commands restored? Vehicle type correct? Seats available?</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Mod Creation",
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
    category: "Troubleshooting",
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
    category: "Troubleshooting",
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
    category: "Asset Workshop",
    title: "Emergency 4 File Formats",
    tags: ["file formats", "v3o", "e4p", "dds", "xml"],
    body: `
      <p>Before editing anything, learn what each file type is responsible for. Most broken mods are not broken because one file is bad. They are broken because the model, texture, prototype, unit entry, script, or UI file does not agree with the others.</p>
      <table>
        <thead><tr><th>File type</th><th>What it is</th><th>Beginner warning</th></tr></thead>
        <tbody>
          <tr><td><code>.v3o</code></td><td>Vision model file used for vehicles, persons, equipment, houses, and objects.</td><td>If the texture path inside the model is wrong, the model may appear white or missing textures.</td></tr>
          <tr><td><code>.dds</code></td><td>DirectDraw Surface texture. Common for skins, icons, cursors, UI, and model textures.</td><td>Bad compression, missing alpha, or wrong dimensions can cause white boxes or crashes.</td></tr>
          <tr><td><code>.png</code></td><td>Image format sometimes used for textures or documentation assets.</td><td>EM4 generally prefers DDS/TGA style game assets; PNG may not behave consistently everywhere.</td></tr>
          <tr><td><code>.e4p</code></td><td>Prototype file. Stores gameplay setup: model path, lights, physics, child objects, commands, vehicle/person traits.</td><td>A perfect model will not work in game until the prototype is configured correctly.</td></tr>
          <tr><td><code>.e4m</code></td><td>Map file. Stores terrain, placed objects, paths, virtual objects, streets, fire objects, and map settings.</td><td>Map edits must be saved in the editor. Script VOs must match the exact map names.</td></tr>
          <tr><td><code>.eft</code></td><td>Terrain texture file used by the editor/map system.</td><td>Terrain art is a separate workflow from normal vehicle skins.</td></tr>
          <tr><td><code>.script</code></td><td>EM4 script file for commands, missions, freeplay controllers, and editor helpers.</td><td>The parser is picky. One missing return, duplicate variable, or long statement can stop the file from loading.</td></tr>
          <tr><td><code>.xml</code></td><td>Configuration file used by specs, UI, language, units, and other systems.</td><td>XML structure must stay valid. One missing closing tag can break a whole config file.</td></tr>
          <tr><td><code>.vmo</code></td><td>Animation file for model movement and character/object animations.</td><td>Animations must match the model skeleton or object setup expected by the game.</td></tr>
          <tr><td><code>.info</code></td><td>Text/info file used for mod descriptions shown in the game.</td><td>Useful for presentation, but it does not control gameplay.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Asset Workshop",
    title: "Skinning and Texture Workflow",
    tags: ["skinning", "textures", "dds", "alpha"],
    body: `
      <p>A skin is the painted texture applied to a model. In EM4, skinning is usually the first visual modding skill because you can change a vehicle or person without creating a new model from scratch.</p>
      <h3>Beginner workflow</h3>
      <ol>
        <li>Find the model's texture path by opening the model or checking the prototype/model folder.</li>
        <li>Make a backup of the original texture.</li>
        <li>Edit a copy in GIMP, Paint.NET, Photoshop, Affinity, or another DDS-capable workflow.</li>
        <li>Keep the image dimensions the same unless you know the model's UV map supports the change.</li>
        <li>Export to the format the model expects, usually DDS or TGA depending on the original asset.</li>
        <li>Test in the editor first, then in game under real lighting.</li>
      </ol>
      <p>Alpha channels are important. They may control transparency, reflections, or other material behavior depending on how the model and texture are set up. If a vehicle looks too glossy, too flat, or has strange black/white areas, inspect the alpha channel before assuming the model is broken.</p>
      <p><strong>Common beginner mistake:</strong> editing a texture but saving it with a different filename or format, then forgetting the model still points to the original texture path.</p>
    `
  },
  {
    category: "Asset Workshop",
    title: "Blender and Model Preparation",
    tags: ["Blender", "models", "v3o", "UV mapping"],
    body: `
      <p>Blender is useful for creating or editing models, but EM4 does not behave like a modern engine. A clean model workflow matters because the game expects simple geometry, sane scale, clean UVs, and correctly referenced textures.</p>
      <h3>What to check before export</h3>
      <ul>
        <li><strong>Scale:</strong> compare against an existing EM4 vehicle, person, or object before exporting.</li>
        <li><strong>Origin and orientation:</strong> vehicles and deployables should face the direction the game expects.</li>
        <li><strong>UV mapping:</strong> the texture must line up with the model faces. A good skin cannot fix a bad UV map.</li>
        <li><strong>Material count:</strong> keep materials organized and avoid unnecessary complexity.</li>
        <li><strong>Smoothing:</strong> use smoothing where curves should look smooth, but keep hard edges where doors, panels, and equipment need definition.</li>
        <li><strong>Texture paths:</strong> after export, confirm the model references the correct texture filenames.</li>
      </ul>
      <p>The usual beginner trap is treating model export as the finish line. In EM4, export is only the visual part. You still need a prototype, physics, lights, doors, commands, children, and often a unit entry.</p>
    `
  },
  {
    category: "Asset Workshop",
    title: "Vehicle Asset Pipeline",
    tags: ["vehicles", "model", "prototype", "units"],
    body: `
      <p>A playable vehicle is a chain of files. If one link is missing, the vehicle may appear in the editor but fail in game, or it may spawn but lack commands, lights, doors, crew, or buy-menu data.</p>
      <table>
        <thead><tr><th>Step</th><th>What you do</th><th>What breaks if skipped</th></tr></thead>
        <tbody>
          <tr><td>Model</td><td>Create or install the <code>.v3o</code> and textures.</td><td>Vehicle appears invisible, white, or visually wrong.</td></tr>
          <tr><td>Prototype</td><td>Create <code>.e4p</code>, assign model, physics, lights, doors, children, and commands.</td><td>Vehicle exists but cannot behave like a proper unit.</td></tr>
          <tr><td>Lights</td><td>Add coronas, blue lights, headlights, special lights, traffic lights, and blinkers as needed.</td><td>Siren scripts may work but vehicle has no convincing light behavior.</td></tr>
          <tr><td>Specs</td><td>Update vehicle/unit specs when the mod uses buy menus or browser entries.</td><td>Vehicle may not appear in the right menu or may have wrong metadata.</td></tr>
          <tr><td>Units</td><td>Add unit icon/portrait and unit XML where needed.</td><td>Vehicle may be playable by script but missing from normal unit selection.</td></tr>
          <tr><td>Script integration</td><td>Assign commands and confirm scripts know the prototype or vehicle type.</td><td>Buttons do not show, show first when they should not, or do nothing.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Asset Workshop",
    title: "Glass Norm and RAL Colors",
    tags: ["Scheibennorm", "RAL", "vehicle colors", "standards"],
    body: `
      <p>The German EM4 community developed visual standards so vehicles from different creators could still look consistent together. Two useful ideas are glass color consistency and RAL color references.</p>
      <h3>Glass norm</h3>
      <p>The glass norm, often called <code>Scheibennorm</code>, is a community convention for vehicle window coloring. The usual idea is a gradient where the upper part of the window is darker and the lower part is lighter. This helps vehicles from different authors look like they belong in the same game world.</p>
      <h3>RAL colors</h3>
      <p>RAL references are useful when skinning European-style fire, police, EMS, and technical rescue vehicles. Even for American-style mods, the concept matters: use consistent color references across your fleet so vehicles do not look randomly painted.</p>
      <table>
        <thead><tr><th>Use</th><th>Example color idea</th><th>Why it matters</th></tr></thead>
        <tbody>
          <tr><td>Fire apparatus</td><td>Fire red, bright red, lime/yellow accents.</td><td>Keeps engines, tankers, ladders, and rescues visually unified.</td></tr>
          <tr><td>Police</td><td>Blue, black/white, green/white, or agency-specific palette.</td><td>Prevents every patrol car from looking like a different department by accident.</td></tr>
          <tr><td>EMS</td><td>White/red, white/orange, yellow/green, or local ambulance livery.</td><td>Helps players identify medical units quickly.</td></tr>
          <tr><td>Tech/rescue</td><td>Orange, blue, white, or local public works colors.</td><td>Separates technical units from fire suppression units.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "Asset Workshop",
    title: "Vehicle and Object Lighting",
    tags: ["lighting", "coronas", "special lights", "editor"],
    body: `
      <p>Lighting is one of the biggest differences between a rough prototype and a finished EM4 unit. Lights are configured in the prototype editor, but scripts can later toggle them with functions such as <code>EnableBlueLights</code>, <code>EnableHeadLights</code>, <code>EnableSpecialLights</code>, and <code>EnableTrafficLight</code>.</p>
      <h3>Light types to understand</h3>
      <ul>
        <li><strong>Blue lights:</strong> emergency lightbar, grille, mirror, side, and rear warning lights.</li>
        <li><strong>Headlights:</strong> normal driving lights, often controlled by time of day or scripts.</li>
        <li><strong>Special lights:</strong> scene lights, deployable lights, alarm lights, drone lights, work lights, or object-specific lighting.</li>
        <li><strong>Traffic lights:</strong> special red/yellow/green light states that scripts can use for directional warning or white-light behavior.</li>
      </ul>
      <p>When debugging lights, separate the problem: if the light never appears in the editor, the prototype light setup is wrong. If it appears in the editor but not during gameplay, the script toggle or command state is probably wrong.</p>
    `
  },
  {
    category: "Asset Workshop",
    title: "OpenHouse Workflow",
    tags: ["OpenHouse", "buildings", "interiors", "prototypes"],
    body: `
      <p>An OpenHouse is a building setup that can expose interior gameplay. It is more complicated than placing a normal static building because the game needs model pieces, prototype organization, floors/interiors, entry logic, and often pathing that makes sense for units.</p>
      <h3>Beginner mental model</h3>
      <p>A normal house is mostly a visual object with fire/interaction properties. An OpenHouse is a building prepared so the player can interact with interior space. That means it has to be organized carefully in both model folders and prototype folders.</p>
      <h3>Typical setup checklist</h3>
      <ul>
        <li>Keep OpenHouse model files in a clear model folder such as <code>Models/OpenHouses/BuildingName</code>.</li>
        <li>Create matching prototype folders under the mod's prototype structure.</li>
        <li>Use the editor's house/open-house tools to create and configure the prototype.</li>
        <li>Check roof, interior, floors, doors, windows, fire objects, and usable paths.</li>
        <li>Test responders entering, leaving, treating, arresting, and carrying persons before using it in a mission.</li>
      </ul>
      <p>OpenHouse work is worth documenting carefully because one missing path, wrong prototype class, or bad collision area can make units refuse to enter or trap them inside.</p>
    `
  },
  {
    category: "SDK Glossary",
    title: "Actor",
    tags: ["SDK", "Actor", "targets"],
    body: `
      <p><code>Actor</code> is the broad target type behind many things the player can click. In command scripts, <code>CheckTarget(GameObject *Caller, Actor *Target, int childID)</code> receives an <code>Actor</code> because the target might be a person, vehicle, object, house, or another clickable entity.</p>
      <p>Beginner rule: treat <code>Actor</code> as the generic clicked thing. Before using person-only or vehicle-only functions, convert it safely to <code>Person</code>, <code>Vehicle</code>, or <code>GameObject</code> and check validity.</p>
    `
  },
  {
    category: "SDK Glossary",
    title: "Command",
    tags: ["SDK", "CommandScript", "commands"],
    body: `
      <p><code>Command.script</code> defines how command scripts are shaped. A command is usually a button assigned to a prototype. EM4 checks whether the command can appear, whether the clicked target is valid, and then runs the action queue.</p>
      <p>The three beginner functions to recognize are <code>CheckPossible</code>, <code>CheckTarget</code>, and <code>PushActions</code>. If a command is missing, start with prototype assignment and <code>CheckPossible</code>. If it shows a red X, inspect <code>CheckTarget</code> and restrictions. If it starts but stops halfway, inspect <code>PushActions</code>.</p>
    `
  },
  {
    category: "SDK Glossary",
    title: "FireObject",
    tags: ["SDK", "FireObject", "fire"],
    body: `
      <p><code>FireObject</code> represents fire behavior attached to objects, houses, or map elements. Fire-related scripts may check burning state, active fire childs, cooling, extinguishing, and whether an object can be treated as a fire target.</p>
      <p>For custom fire roleplay, the map and prototype matter as much as the script. If an object cannot burn, cannot be cooled, or cannot be targeted by the expected command, inspect the fire objects and prototype setup before rewriting the command.</p>
    `
  },
  {
    category: "SDK Glossary",
    title: "Input",
    tags: ["SDK", "Input", "hotkeys"],
    body: `
      <p><code>Input</code> lets scripts react to player key state, such as priority keys or modifier keys. Older EM4 scripts often use this to change command priority or trigger a shortcut-style behavior.</p>
      <p>Use input checks sparingly. They are useful for advanced command behavior, but they can make scripts harder for beginners to understand because the same button may behave differently depending on a key press.</p>
    `
  },
  {
    category: "SDK Glossary",
    title: "OpenHouse",
    tags: ["SDK", "OpenHouse", "buildings"],
    body: `
      <p><code>OpenHouse</code> is the script/API side of buildings with playable or visible interiors. It connects to the editor OpenHouse workflow and matters when units need to enter, leave, treat victims, arrest suspects, or interact with fire inside a building.</p>
      <p>When OpenHouse behavior fails, check the model/prototype setup, entrance points, floor/interior configuration, pathing, and command targeting. The script may only be exposing a problem created in the building setup.</p>
    `
  },
  {
    category: "SDK Glossary",
    title: "SpawnPoint",
    tags: ["SDK", "SpawnPoint", "paths"],
    body: `
      <p><code>SpawnPoint</code> is used for controlled spawning, especially traffic and civilians tied to map paths. Spawn points can be blocked, assigned to paths, and configured with groups or probabilities depending on editor setup.</p>
      <p>If the log says a spawn point is blocked, the script may be innocent. The map path, object placement, traffic density, or spawn point position may be preventing the engine from placing the actor.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "What the SDK Folder Is",
    tags: ["SDK", "scripting", "reference"],
    body: `
      <p>The SDK folder is the script API reference. It tells you which classes, enums, and functions EM4 exposes to scripts. It does not teach gameplay by itself, but it explains what functions are available when writing command or mission scripts.</p>
      <p>Your SDK folder contains 25 reference scripts: <code>Actor</code>, <code>GameObject</code>, <code>Person</code>, <code>Vehicle</code>, <code>Game</code>, <code>Command</code>, <code>Mission</code>, <code>Interface</code>, <code>Audio</code>, <code>Camera</code>, <code>Spawn</code>, <code>Path</code>, <code>List</code>, <code>XMLGui</code>, and supporting enum/math/system files.</p>
      <p>When a script fails because a function does not exist, the SDK is where you verify the real function name and signature.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "SDK Reading Strategy",
    tags: ["SDK", "workflow", "how to read"],
    body: `
      <p>The SDK files are not tutorials. They are declarations: they show names, parameters, return types, enums, and class relationships. Read them like a map of what scripts are allowed to call.</p>
      <ul>
        <li>Use <code>Command.script</code> when a button will not appear or target correctly.</li>
        <li>Use <code>GameObject.script</code> when you need movement, actions, lights, flags, equipment, fire, physics, or command assignment.</li>
        <li>Use <code>Person.script</code> for health, arrest, behavior, contamination, equipment location, dogs, and person roles.</li>
        <li>Use <code>Vehicle.script</code> for passengers, transports, doors, lights, sirens, vehicle type, hose connectors, and return behavior.</li>
        <li>Use <code>Game.script</code> for creating objects, finding objects, checking VOs/triggers, and global game state.</li>
        <li>Use <code>Mission.script</code> for timers, objectives, cutscenes, comments, hints, counters, and mission success/failure logic.</li>
      </ul>
    `
  },
  {
    category: "SDK Reference",
    title: "Core SDK Classes",
    tags: ["Actor", "GameObject", "Person", "Vehicle"],
    body: `
      <table>
        <thead><tr><th>SDK File</th><th>Purpose</th><th>Common Use</th></tr></thead>
        <tbody>
          <tr><td><code>Actor.script</code></td><td>Base class for things placed in the world.</td><td>Positions, rotations, names, actor types, and map references.</td></tr>
          <tr><td><code>GameObject.script</code></td><td>Base gameplay object class. Persons and vehicles inherit from it.</td><td>Commands, actions, lights, physics, flags, burning, distance, carried objects, action queues.</td></tr>
          <tr><td><code>Person.script</code></td><td>Person-specific behavior.</td><td>Injury state, arrest state, carrying persons, person roles, equipment, animation, linked persons.</td></tr>
          <tr><td><code>Vehicle.script</code></td><td>Vehicle-specific behavior.</td><td>Passengers, transports, doors, sirens/lights, vehicle type, return to base, unload checks.</td></tr>
          <tr><td><code>FireObject.script</code></td><td>Burning object interface.</td><td>Checking or controlling fire object state in scripted fire/alarm systems.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "SDK Reference",
    title: "GameObject: The Main Workhorse",
    tags: ["GameObject", "actions", "commands"],
    body: `
      <p><code>GameObject</code> is the base gameplay class for most things you touch in scripts. It handles command assignment, placement, position, rotation, equipment, flags, fire, particle effects, physics, lights, children, range checks, and action queues.</p>
      <h3>Common categories</h3>
      <ul>
        <li>Commands: <code>AssignCommand</code>, <code>RemoveCommand</code>, <code>EnableCommand</code>, <code>DisableAllCommands</code>, <code>HasCommand</code>, <code>SetCommandable</code>.</li>
        <li>Position and rotation: <code>SetPosition</code>, <code>GetPosition</code>, <code>SetRotation</code>, <code>GetRotation</code>, <code>SetLookatDir</code>.</li>
        <li>Equipment: <code>SetEquipment</code>, <code>GetEquipment</code>, <code>RemoveEquipment</code>.</li>
        <li>Fire: <code>Burn</code>, <code>StopBurning</code>, <code>IsBurning</code>, <code>SetFireObjectBurning</code>, <code>GetFireChild</code>.</li>
        <li>Lights: <code>EnableBlueLights</code>, <code>EnableHeadLights</code>, <code>EnableSpecialLights</code>, <code>EnableTrafficLight</code>, <code>EnableBlinker</code>.</li>
        <li>Children: <code>HasChild</code>, <code>SetChildEnabled</code>, <code>IsChildEnabled</code>, <code>GetChildPosition</code>.</li>
        <li>Triggers and VOs: <code>IsCollidingWithTrigger</code>, <code>IsCollidingWithVirtualObject</code>, <code>ActivateTrigger</code>, <code>DeactivateTrigger</code>.</li>
      </ul>
    `
  },
  {
    category: "SDK Reference",
    title: "GameObject Flags",
    tags: ["flags", "equipment", "objects"],
    body: `
      <p>Flags are bit values stored on objects. They define behavior and available equipment. Many base commands rely on flags and command restrictions matching each other.</p>
      <table>
        <thead><tr><th>Flag</th><th>Meaning</th><th>Common Use</th></tr></thead>
        <tbody>
          <tr><td><code>OF_USABLE</code></td><td>Object can be used.</td><td>Special-use objects, panels, bomb targets.</td></tr>
          <tr><td><code>OF_ACCESSIBLE</code></td><td>Object can be entered.</td><td>Houses and enterable objects.</td></tr>
          <tr><td><code>OF_COOLABLE</code></td><td>Object can be cooled.</td><td>Firefighting and exposure protection.</td></tr>
          <tr><td><code>OF_SHOOTABLE</code></td><td>Object can be shot at.</td><td>Police weapon logic.</td></tr>
          <tr><td><code>OF_HAS_SHEARS</code></td><td>Object carries jaws of life.</td><td>Rescue vehicles or tool tarps.</td></tr>
          <tr><td><code>OF_HAS_CHAINSAW</code></td><td>Object carries chainsaws.</td><td>Fire/rescue equipment sources.</td></tr>
          <tr><td><code>OF_HAS_HOSE</code></td><td>Object carries fire hoses.</td><td>Engines and hose equipment.</td></tr>
          <tr><td><code>OF_HAS_FIREAXE</code></td><td>Object carries axes.</td><td>Firefighter equipment source.</td></tr>
          <tr><td><code>OF_HIDDEN</code></td><td>Object is invisible.</td><td>Hidden patients, staged logic, markers.</td></tr>
          <tr><td><code>OF_BLOCKED</code></td><td>No interaction with object.</td><td>Temporarily disabling interaction.</td></tr>
        </tbody>
      </table>
      <p>Useful methods include <code>IsFlagSet</code>, <code>SetFlag</code>, <code>ClearFlag</code>, <code>ToggleFlag</code>, <code>GetFlags</code>, and <code>SetFlags</code>.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "Action Queue Fundamentals",
    tags: ["actions", "PushAction", "timing"],
    body: `
      <p>Most EM4 behavior is an action queue. Scripts do not usually teleport through a whole sequence at once. They push a chain of actions onto a person, vehicle, or object.</p>
      <ul>
        <li><code>ACTION_NEWLIST</code> clears the current queue and starts over.</li>
        <li><code>ACTION_APPEND</code> adds a step after existing queued steps.</li>
        <li><code>ClearActions</code> stops the current queue.</li>
        <li><code>PushActionWait</code> is essential for timing animations, audio, vehicle loading, and staged roleplay.</li>
        <li><code>PushActionExecuteCommand</code> lets a dummy command run later after movement or waiting finishes.</li>
      </ul>
      <pre><code>p.PushActionMove(ACTION_NEWLIST, TargetPos);
p.PushActionTurnTo(ACTION_APPEND, Target);
p.PushActionWait(ACTION_APPEND, 2.5f);
p.PushActionExecuteCommand(ACTION_APPEND, "DummyNextStep", Target, 0, false);</code></pre>
    `
  },
  {
    category: "SDK Reference",
    title: "Common PushAction Families",
    tags: ["PushAction", "movement", "equipment"],
    body: `
      <table>
        <thead><tr><th>Family</th><th>Methods</th><th>Use Cases</th></tr></thead>
        <tbody>
          <tr><td>Movement</td><td><code>PushActionMove</code>, <code>PushActionMoveFollow</code>, <code>PushActionUsePath</code>, <code>PushActionReturnToBase</code></td><td>Move units, follow targets, use paths, leave map.</td></tr>
          <tr><td>Vehicle entry</td><td><code>PushActionEnterCar</code>, <code>PushActionLeaveCar</code>, <code>PushActionPutInCar</code></td><td>Loading crews, unloading officers, transporting suspects.</td></tr>
          <tr><td>Equipment</td><td><code>PushActionGetEquipment</code>, <code>PushActionRemoveEquipment</code>, <code>PushActionUseEquipment</code></td><td>Shears, chainsaw, spineboard-like flows, tool use animations.</td></tr>
          <tr><td>Fire/EMS</td><td><code>PushActionExtinguish</code>, <code>PushActionCool</code>, <code>PushActionHeal</code>, <code>PushActionCannonExtinguish</code></td><td>Suppression, cooling, treatment, water cannon logic.</td></tr>
          <tr><td>Police</td><td><code>PushActionArrest</code>, <code>PushActionAim</code>, <code>PushActionShoot</code>, <code>PushActionRelease</code></td><td>Arrest, weapon aiming, shooting, release.</td></tr>
          <tr><td>Special units</td><td><code>PushActionInstall</code>, <code>PushActionDeinstall</code>, <code>PushActionFlyTo</code>, <code>PushActionDogSearch</code></td><td>Deployables, helicopters, rescue dog searches.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "SDK Reference",
    title: "CommandScript and MissionScript",
    tags: ["CommandScript", "MissionScript", "scripts"],
    body: `
      <p><code>Command.script</code> defines <code>CommandScript</code>, restrictions, command groups, move modes, and command behavior. This is the reference for person, vehicle, and object buttons.</p>
      <p><code>Mission.script</code> defines <code>MissionScript</code>, mission states, scoring, mission time, objectives, mission results, and callback behavior. This is the reference for larger scenario logic.</p>
      <p>Use command scripts when the player presses a button. Use mission/freeplay scripts when the world needs to run logic by itself: timers, callout schedulers, objectives, mission completion, or global event state.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "CommandScript Restrictions and Visibility",
    tags: ["CommandScript", "restrictions", "buttons"],
    body: `
      <p><code>CommandScript</code> controls how a command appears, what it can target, and how it behaves in the command menu. The SDK exposes restrictions, possible callers, possible world conditions, groups, priority, icons, and cursors.</p>
      <ul>
        <li><code>SetIcon</code> and <code>SetCursor</code> must match files in the UI icon folders.</li>
        <li><code>SetRestrictions</code> and <code>AddRestriction</code> connect a command to target state, such as injured, arrested, usable, burning, accessible, or self-execute.</li>
        <li><code>SetPossibleCallers</code> narrows which actor types can use the command.</li>
        <li><code>SetValidTargets</code> narrows target actor types.</li>
        <li><code>SetPriority</code> influences which command the game prefers when multiple commands can target the same object.</li>
        <li><code>SetGroupID</code> and <code>SetGroupLeader</code> are used to organize command menus.</li>
      </ul>
      <p>If a command appears first when it should not, check priority, restrictions, and whether its target checks are too broad.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "Person SDK Deep Dive",
    tags: ["Person", "health", "police", "EMS"],
    body: `
      <p><code>Person</code> controls health, injury, contamination, arrest, behavior, equipment, dogs, messages, houses, and person type.</p>
      <table>
        <thead><tr><th>Category</th><th>Methods / Enums</th><th>Example Use</th></tr></thead>
        <tbody>
          <tr><td>Health</td><td><code>GetLife</code>, <code>SetLife</code>, <code>Heal</code>, <code>Injure</code>, <code>Kill</code>, <code>Revive</code></td><td>Patient care, CPR, comatose state, death, recovery.</td></tr>
          <tr><td>State checks</td><td><code>IsInjured</code>, <code>IsComatose</code>, <code>IsDead</code>, <code>GetState</code></td><td>Decide what treatment or coroner logic is allowed.</td></tr>
          <tr><td>Arrest</td><td><code>Arrested</code>, <code>IsArrested</code>, <code>GetArrested</code></td><td>Custody, suspect transport, handcuff states.</td></tr>
          <tr><td>Behavior</td><td><code>SetBehaviour</code>, <code>SetFleeing</code>, <code>SetCivilsFleeing</code></td><td>Suspects, panic civilians, traffic stop occupants.</td></tr>
          <tr><td>Roles/types</td><td><code>GetRole</code>, <code>SetRole</code>, <code>GetPersonType</code>, <code>IsDoctor</code>, <code>IsEngineer</code></td><td>Restrict commands to police, firefighters, medics, engineers.</td></tr>
          <tr><td>Equipment visuals</td><td><code>PlaceObjectInRightHand</code>, <code>RemoveObjectInRightHand</code>, <code>SetObjectToEquipmentLocation</code></td><td>Long gun, radio, tool, frisk animation props.</td></tr>
          <tr><td>Dogs</td><td><code>IsRescueDog</code>, <code>SetFoundByDog</code>, <code>PushActionDogSearch</code></td><td>Missing person and search callouts.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "SDK Reference",
    title: "Vehicle SDK Deep Dive",
    tags: ["Vehicle", "passengers", "transports"],
    body: `
      <p><code>Vehicle</code> controls vehicle energy, damage, passengers, transported patients/suspects, doors, vehicle type, landing logic, hose connectors, vehicle categories, and siren files.</p>
      <table>
        <thead><tr><th>Category</th><th>Methods</th><th>Use</th></tr></thead>
        <tbody>
          <tr><td>Passengers</td><td><code>GetPassengers</code>, <code>AddPassenger</code>, <code>RemovePassenger</code>, <code>GetFreePassengers</code></td><td>Crew spawning, occupied checks, deploy officer commands.</td></tr>
          <tr><td>Transports</td><td><code>GetTransports</code>, <code>AddTransport</code>, <code>RemoveTransport</code>, <code>GetFreeTransports</code></td><td>Ambulance patients, arrested suspects, coroner transport.</td></tr>
          <tr><td>Vehicle type</td><td><code>GetVehicleType</code>, <code>SetVehicleRole</code>, <code>IsPolice</code>, <code>IsFirefighter</code>, <code>IsAmbulance</code></td><td>Command availability and special behavior.</td></tr>
          <tr><td>Doors</td><td><code>PlayAnimOpenDoor</code>, <code>PlayAnimCloseDoor</code></td><td>Equipment doors, person doors, visual polish.</td></tr>
          <tr><td>Connectors</td><td><code>IsConnectorFree</code>, <code>GetUsedConnectorPosition</code>, <code>IsUsingConnector</code></td><td>Fire hose and tanker/engine water supply logic.</td></tr>
          <tr><td>Damage</td><td><code>SetEnergy</code>, <code>GetEnergy</code>, <code>Damage</code>, <code>Destroy</code>, <code>SetSmoking</code></td><td>Crashes, fires, vehicle hazards.</td></tr>
          <tr><td>Special</td><td><code>FindReachablePosition</code>, <code>CheckUnloadPossible</code>, <code>SetSirenFile</code></td><td>Safe unloading, siren customization, pathing decisions.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "SDK Reference",
    title: "Game, Lists, Spawns, and Paths",
    tags: ["Game", "List", "Spawn", "Path"],
    body: `
      <p><code>Game.script</code> is one of the most important SDK files. It exposes creation functions such as <code>CreateObject</code>, <code>CreatePerson</code>, and <code>CreateVehicle</code>, object searches, command execution, map checks, and free-position helpers.</p>
      <p><code>List.script</code> defines <code>GameObjectList</code>, <code>PersonList</code>, <code>VehicleList</code>, <code>PathList</code>, and <code>SpawnPointList</code>. These are how scripts loop through matching world objects.</p>
      <p><code>Spawn.script</code> and <code>Path.script</code> matter for callouts, traffic, escape routes, and map-driven behavior. Use these when a script needs to spawn or move objects based on map data.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "Game Namespace Deep Dive",
    tags: ["Game", "global functions", "VO"],
    body: `
      <p>The <code>Game</code> namespace is the global toolbox. It creates objects, finds objects, executes commands, checks map areas, controls triggers, manages time, and queries game mode.</p>
      <ul>
        <li>Creation: <code>CreateObject</code>, <code>CreatePerson</code>, <code>CreateVehicle</code>, <code>RemoveGameObject</code>.</li>
        <li>Search: <code>GetGameObjects</code>, <code>GetGameObjectsWithPrefix</code>, <code>GetSelectedGameObjects</code>, <code>GetActors</code>.</li>
        <li>Command execution: <code>ExecuteCommand</code>.</li>
        <li>Area checks: <code>CollectObstaclesOnVirtualObject</code>, <code>IsSquadInVirtualObject</code>, <code>IsCivilianInVirtualObject</code>, <code>IsBurningObjectInVirtualObject</code>.</li>
        <li>Positioning: <code>FindFreePosition</code>, <code>FindAvailablePosition</code>, <code>GetGroundHeight</code>.</li>
        <li>Triggers and liquids: <code>ActivateTrigger</code>, <code>DeactivateTrigger</code>, <code>ActivateLiquid</code>, <code>DeactivateLiquid</code>.</li>
        <li>Mode checks: <code>IsFreeplay</code>, <code>IsMultiplayer</code>, <code>IsCampaign</code>, <code>IsMission</code>.</li>
      </ul>
    `
  },
  {
    category: "SDK Reference",
    title: "Lists and Safe Iteration",
    tags: ["lists", "iteration", "objects"],
    body: `
      <p>EM4 list classes wrap groups of actors. You usually get a count, loop from zero, then pull each object pointer.</p>
      <pre><code>GameObjectList l = Game::GetGameObjectsWithPrefix("homicide_lead");
for (int i = 0; i &lt; l.GetNumObjects(); i++)
{
    GameObject *obj = l.GetObject(i);
    if (!obj || !obj-&gt;IsValid())
        continue;
    // use obj safely here
}</code></pre>
      <p>Important list classes include <code>ActorList</code>, <code>GameObjectList</code>, <code>PersonList</code>, <code>VehicleList</code>, <code>FireObjectList</code>, <code>PathList</code>, and <code>SpawnPointList</code>.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "Mission Namespace Deep Dive",
    tags: ["Mission", "timers", "objectives"],
    body: `
      <p><code>Mission</code> is where mission/freeplay scenario control becomes possible. It exposes objectives, timers, counters, cutscenes, comments, hints, ticker text, money, countdowns, and mission scoring.</p>
      <ul>
        <li>Objectives: <code>AddObjective</code>, <code>RemoveObjective</code>, <code>SetObjectiveAccomplished</code>, <code>AllObjectivesAccomplished</code>.</li>
        <li>Timers: <code>StartSingleTimer</code>, <code>StartIntervalTimer</code>, <code>StopTimer</code>, <code>TimerIsStarted</code>.</li>
        <li>Counters: <code>GetCounter</code>, <code>IncCounter</code>, <code>SetCounter</code>, <code>ResetCounters</code>.</li>
        <li>Cutscenes: <code>StartCutScene</code>, <code>EndCutScene</code>, <code>ShowBlackBars</code>, <code>HideBlackBars</code>.</li>
        <li>Player feedback: <code>PlayHint</code>, <code>ShowMessageTickerText</code>, <code>PlayComment</code>.</li>
      </ul>
      <p>Custom callouts should usually use timers and counters instead of running heavy checks constantly.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "Interface, Audio, Camera, and XMLGui",
    tags: ["Interface", "Audio", "Camera", "XMLGui"],
    body: `
      <table>
        <thead><tr><th>SDK File</th><th>Why It Matters</th></tr></thead>
        <tbody>
          <tr><td><code>Interface.script</code></td><td>Vehicle browser, message ticker, tutorial instructions, UI control, blinking order buttons, and player-facing notices.</td></tr>
          <tr><td><code>Audio.script</code></td><td>Sound playback references for effects, dispatch, and command feedback.</td></tr>
          <tr><td><code>Camera.script</code></td><td>Camera movement, following targets, looking at targets, and cinematic mission/tutorial control.</td></tr>
          <tr><td><code>XMLGui.script</code></td><td>Custom game dialog support. Useful when exploring advanced UI, though freeplay UI support can be limited and finicky.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "SDK Reference",
    title: "ScriptInterface Deep Dive",
    tags: ["Interface", "ticker", "UI"],
    body: `
      <p><code>ScriptInterface</code> controls in-game interface pieces: map, radar, navigator, info bar, vehicle browser, briefing, tips, action bar, objectives, tutorial overlays, notices, blinking buttons, current commands, ticker text, and radar texture.</p>
      <p>For roleplay scripts, the most useful functions are usually <code>ShowMessageTickerTextForAll</code>, <code>ShowMessageTickerTextForSinglePlayer</code>, <code>BlinkPopupMenuCommand</code>, <code>SetCurrentCommand</code>, and vehicle browser controls.</p>
      <p>Use <code>Mission::ShowMessageTickerText</code> or <code>ScriptInterface::ShowMessageTickerTextForAll</code> when the player needs a persistent top-bar style update. Use <code>Game::ShowHelpTextWindow</code> when the player needs white on-screen text.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "Light and Visual Control",
    tags: ["lights", "effects", "visuals"],
    body: `
      <p>Light functions are on <code>GameObject</code>, which means they can apply to vehicles and many objects.</p>
      <ul>
        <li><code>EnableBlueLights</code>: emergency warning lights.</li>
        <li><code>EnableHeadLights</code>: headlights.</li>
        <li><code>EnableBrakeLights</code>: brake lights.</li>
        <li><code>EnableSpecialLights</code>: special prototype lights, useful for deployable lights, alarm panels, drones, or scene objects.</li>
        <li><code>EnableTrafficLight</code>: can force traffic light behavior such as red, yellow, or green.</li>
        <li><code>EnableBlinker</code>: left, right, or both blinkers.</li>
        <li><code>SetLightEnabled</code>: toggles a specific light by ID.</li>
      </ul>
      <p>For power outage, alarm, roadside light, and station scripts, special lights are usually the cleanest visual toggle.</p>
    `
  },
  {
    category: "SDK Reference",
    title: "SDK Patterns Used by Roleplay Scripts",
    tags: ["patterns", "roleplay", "examples"],
    body: `
      <table>
        <thead><tr><th>Roleplay Feature</th><th>SDK Tools</th></tr></thead>
        <tbody>
          <tr><td>Traffic stop</td><td><code>Vehicle</code> passengers/transports, <code>GameObject</code> lights/actions, <code>Game</code> commands, <code>Mission</code> ticker.</td></tr>
          <tr><td>Advanced custody</td><td>Dummy commands as state markers, <code>PushActionEnterCar</code>, <code>PushActionPutInCar</code>, <code>PushActionReturnToBase</code>, VOs.</td></tr>
          <tr><td>Homicide callout</td><td><code>CreatePerson</code>, <code>CreateObject</code>, <code>SetBloodPuddle</code>, timers, objectives, detective command.</td></tr>
          <tr><td>Fire alarm panel</td><td>VO object searches, <code>EnableSpecialLights</code>, separate acknowledge/silence commands, burning object checks.</td></tr>
          <tr><td>Fuel/water systems</td><td>Dummy state commands, command restrictions, vehicle checks, help text, ticker updates.</td></tr>
          <tr><td>Deployable equipment</td><td><code>CreateObject</code> or <code>CreateVehicle</code>, <code>FindFreePosition</code>, rotate/remove commands, equipment flags.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    category: "SDK Reference",
    title: "Enums and Support Files",
    tags: ["enums", "equipment", "math"],
    body: `
      <p>Small SDK files are still important. They define the exact constants scripts expect.</p>
      <ul>
        <li><code>ActionInsertModes.script</code>: action queue insert modes like new list or append.</li>
        <li><code>EActions.script</code>: action callback results.</li>
        <li><code>EquipmentNames.script</code>: equipment type constants.</li>
        <li><code>Vector.script</code> and <code>Math.script</code>: coordinates, directions, distance math, and helper calculations.</li>
        <li><code>Weather.script</code>: weather control or checks.</li>
        <li><code>ScriptSerializer.script</code>: saving and restoring script object references.</li>
      </ul>
    `
  },
  {
    category: "Folder Structure",
    title: "Base Game Data Folder Map",
    tags: ["base game", "data", "folders"],
    body: `
      <p>The base game <code>Data</code> directory is the best map of how EM4 thinks. Your mod mirrors parts of this structure. If a file exists in the mod with the same path, the mod version can override or extend the base behavior.</p>
      <ul>
        <li><code>Audio</code>: base sounds, music, effects, sirens, screams, and UI clicks.</li>
        <li><code>basedata</code>: lower-level game data used by the engine.</li>
        <li><code>Emitters</code>: particle emitters such as smoke, fire, water, sparks, foam, and effects.</li>
        <li><code>Fonts</code>: bitmap fonts and font definitions used by UI XML.</li>
        <li><code>Lang</code>: translated strings, help text, UI labels, mission text, and language-specific XML.</li>
        <li><code>Maps</code>: playable maps, editor map data, paths, spawn points, and map properties.</li>
        <li><code>Models</code>: model geometry and texture references for persons, vehicles, objects, houses, and equipment.</li>
        <li><code>Prototypes</code>: the actual editable entities the game spawns and the editor displays.</li>
        <li><code>Scripts</code>: command scripts, mission scripts, editor tools, and startup logic.</li>
        <li><code>Specs</code>: XML configuration for vehicles, portraits, materials, campaign, freeplay, controls, and parameters.</li>
        <li><code>Textures</code>: shared map, terrain, object, and effect textures.</li>
        <li><code>UI</code>: XML layouts, button states, icons, menus, minimap markers, and in-game windows.</li>
        <li><code>Units</code>: unit browser entries, buy menu icons, equipment entries, portraits, and unit metadata.</li>
        <li><code>Video</code>: menu and campaign video assets.</li>
      </ul>
    `
  },
  {
    category: "Folder Structure",
    title: "Audio Folder Deep Dive",
    tags: ["audio", "wav", "sirens"],
    body: `
      <p><code>Data/Audio</code> contains the game's sound world. Mods commonly add files under <code>Audio/FX</code> for dispatch clips, command sounds, sirens, UI confirmations, body camera beeps, tones, and roleplay radio traffic.</p>
      <p>Use short, clearly named WAV files. Scripts should reference them with a mod path such as <code>mod:Audio/FX/EM4Resource/Dispatch_First_Alarm.wav</code>. If audio overlaps, combine the line into one WAV or add script delays before the next transmission.</p>
    `
  },
  {
    category: "Folder Structure",
    title: "Emitters Folder Deep Dive",
    tags: ["emitters", "particles", "effects"],
    body: `
      <p><code>Data/Emitters</code> stores particle effect definitions. These are used for fire, smoke, explosions, sparks, water effects, foam, contamination, and visual atmosphere. When making hazmat, fire alarm, power outage, or explosion callouts, emitters are often the visible layer that sells the event.</p>
      <p>Most modders do not start here. First learn prototypes and scripts, then come back when you need a custom visual effect.</p>
    `
  },
  {
    category: "Folder Structure",
    title: "Fonts and Language Files",
    tags: ["fonts", "lang", "strings"],
    body: `
      <p><code>Data/Fonts</code> and <code>Data/Lang</code> control how text appears and what labels the game displays. EM4 uses bitmap font definitions, so the UI is much less flexible than a web page.</p>
      <p>Language XML can hold command names, mission text, UI labels, help text, and descriptions. Hard-coded script text is faster for testing, but language files are cleaner when a project gets large or needs translation.</p>
    `
  },
  {
    category: "Folder Structure",
    title: "Maps Folder Deep Dive",
    tags: ["maps", "paths", "spawnpoints", "VO"],
    body: `
      <p><code>Data/Maps</code> is where map files live. A map is more than terrain. It contains paths, streets, spawn points, entry and exit logic, virtual objects, object placement, fire objects, traffic lights, and editor metadata.</p>
      <ul>
        <li>Use paths for civilian traffic and scripted movement patterns.</li>
        <li>Use spawn points and map exits for traffic and returning vehicles.</li>
        <li>Use virtual objects for stations, callouts, search areas, parking spots, alarm zones, and control panels.</li>
        <li>Use turn-to VOs when vehicles must face a specific direction.</li>
      </ul>
    `
  },
  {
    category: "Folder Structure",
    title: "Models vs Prototypes",
    tags: ["models", "prototypes", "e4p", "v3o"],
    body: `
      <p>A model is the visual asset. A prototype is the game object that uses the model. This distinction matters constantly.</p>
      <ul>
        <li><code>Models</code> usually holds visual geometry and texture references.</li>
        <li><code>Prototypes</code> holds gameplay traits: commands, lights, doors, physics, child objects, unit type, and behavior.</li>
        <li>If a vehicle looks wrong, inspect the model and texture.</li>
        <li>If a vehicle behaves wrong, inspect the prototype and scripts.</li>
      </ul>
    `
  },
  {
    category: "Folder Structure",
    title: "Specs Folder Deep Dive",
    tags: ["specs", "xml", "configuration"],
    body: `
      <p><code>Data/Specs</code> is where many global rules live. The base game includes files for freeplay parameters, campaign parameters, vehicles, portraits, materials, keys, audio commands, and unit metadata.</p>
      <ul>
        <li><code>freeplayparameters.xml</code> and <code>fp_params_*.xml</code>: event timing, freeplay values, and event balancing.</li>
        <li><code>vehicles.xml</code>: vehicle-related metadata used by unit systems.</li>
        <li><code>portraits.xml</code>: portrait assignments.</li>
        <li><code>materials.xml</code>: material behavior, resistance, and interaction values.</li>
        <li><code>audiocommands.xml</code>: audio command definitions.</li>
        <li><code>keys.xml</code>: key bindings.</li>
      </ul>
    `
  },
  {
    category: "Folder Structure",
    title: "UI Folder Deep Dive",
    tags: ["UI", "XML", "menus"],
    body: `
      <p><code>Data/UI</code> is where EM4's interface is built. The main menu uses XML layouts and DDS button states. The base main menu uses a 1024 by 768 dialog, cyan title text, compact font definitions, and button images with separate normal, hover, pressed, and disabled states.</p>
      <p>Important naming pattern: <code>_on</code> is normal, <code>_ov</code> is hover, <code>_cl</code> is clicked or pressed, and <code>_dis</code> is disabled. This encyclopedia now follows that same idea in CSS instead of copying base-game images.</p>
    `
  },
  {
    category: "Folder Structure",
    title: "Units Folder Deep Dive",
    tags: ["units", "browser", "equipment"],
    body: `
      <p><code>Data/Units</code> controls the unit browser presentation: icons, big images, portraits, and <code>unit.xml</code> files for personnel, vehicles, and equipment. This is separate from the prototype itself.</p>
      <p>If a unit exists as a prototype but does not appear correctly in the buy menu, unit browser, or equipment menu, inspect <code>Units</code> and related specs rather than only the prototype.</p>
    `
  },
  {
    category: "Folder Structure",
    title: "Scripts Folder Deep Dive",
    tags: ["scripts", "command", "mission"],
    body: `
      <p><code>Data/Scripts</code> is split into editor scripts and game scripts. Game scripts are usually the ones modders edit.</p>
      <ul>
        <li><code>Scripts/Game/Command</code>: commands attached to prototypes, such as move, arrest, heal, enter car, get equipment, deploy objects, sirens, and custom roleplay actions.</li>
        <li><code>Scripts/Game/Mission</code>: mission files, tutorial logic, numbered campaign missions, and freeplay startup/control scripts.</li>
        <li><code>Scripts/startup.script</code>: startup logic loaded by the game.</li>
      </ul>
      <p>Command scripts are best for buttons. Mission/freeplay scripts are best for timers, global state, callouts, objectives, and startup behavior.</p>
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
    title: "Map Editor Tabs and Modes",
    tags: ["editor", "maps", "function keys", "tabs"],
    body: `
      <p>The map editor is not one tool. It is a group of modes for terrain, objects, water, virtual objects, paths, streets, spawns, fires, triggers, conditions, and map metadata. New modders usually get lost because they try to solve a path problem in a prototype window or a script problem in a terrain tool.</p>
      <table>
        <thead><tr><th>Editor area</th><th>Shortcut or area</th><th>What it controls</th></tr></thead>
        <tbody>
          <tr><td>Scene / object placement</td><td>Scene mode</td><td>Placed objects, houses, vehicles, persons, and map props.</td></tr>
          <tr><td>Terrain height</td><td>Terrain tools</td><td>Ground elevation, terrain shaping, slopes, and height-map style work.</td></tr>
          <tr><td>Terrain texture</td><td>Texture tools</td><td>Base terrain painting, ground surface appearance, roadsides, grass, dirt, and blended map art.</td></tr>
          <tr><td>Liquid</td><td><code>F4</code></td><td>Water surfaces. Boat-usable water should be paired with correct water VOs and terrain settings.</td></tr>
          <tr><td>Virtual Objects</td><td><code>F5</code></td><td>Invisible named zones used by scripts, water areas, station bays, search areas, alarm zones, and parking spots.</td></tr>
          <tr><td>Additional burning objects</td><td><code>F6</code></td><td>Freely placed burn points for fire behavior beyond prototype fire objects.</td></tr>
          <tr><td>Paths</td><td><code>F7</code></td><td>Civilian and civilian vehicle movement paths.</td></tr>
          <tr><td>Streets</td><td><code>Shift+F7</code></td><td>Emergency vehicle routefinder network.</td></tr>
          <tr><td>Spawn points</td><td><code>F9</code></td><td>Civilian/person/vehicle spawning tied to paths and map activity.</td></tr>
          <tr><td>Map properties</td><td><code>Shift+F9</code></td><td>Entries, exits, boundaries, weather/light effects, camera starts, and map-wide settings.</td></tr>
          <tr><td>Waiting points</td><td><code>Shift+F3</code></td><td>Where civilians pause along paths and how long they wait.</td></tr>
          <tr><td>Triggers</td><td>Trigger tools</td><td>Areas used by mission logic or scripted checks.</td></tr>
          <tr><td>Ambient sounds</td><td>Ambient sound tools</td><td>Placed sound sources for background map atmosphere.</td></tr>
          <tr><td>Mission conditions</td><td>Mission condition tools</td><td>Success/failure checks for missions and scripted scenarios.</td></tr>
          <tr><td>Materials</td><td>Material settings</td><td>Surface and fire behavior settings used by the engine.</td></tr>
        </tbody>
      </table>
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
    category: "Maps",
    title: "Map Performance and Poly Budget",
    tags: ["performance", "polygons", "models", "maps"],
    body: `
      <p>Emergency 4 does not publish one simple universal polygon cap for every mod asset. EM4Resource uses <strong>around 15,000 polygons</strong> as a practical upper working target for a detailed vehicle model. Lower counts are still preferred when the same detail can be handled cleanly with textures.</p>
      <p>Older community discussion often referenced 5,000 polygons as a conservative recommendation, not a hard rule. Modern systems can handle more, but polygon count still matters when several detailed vehicles, civilians, lights, particles, and map objects are visible at once. Very high counts can be wasteful in EM4 because the game is usually played from an overhead camera and strong texture work often sells detail better than extra geometry.</p>
      <h3>Practical map budget rules</h3>
      <ul>
        <li>Use textures for small detail like door handles, panel seams, labels, and vents where possible.</li>
        <li>Spend polygons where silhouette matters: ladders, lightbars, equipment bodies, curved cabs, aircraft, and unique shapes.</li>
        <li>Avoid placing many high-poly decorative objects in one camera view.</li>
        <li>Watch performance around stations because parked units, personnel, doors, lights, and scripts often stack there.</li>
        <li>Test at night with lights on, during fires, and with several vehicles moving. Daytime editor view is not enough.</li>
      </ul>
      <p><strong>Rule of thumb:</strong> if the detail is only visible in a close-up screenshot, it probably belongs in the texture instead of the mesh.</p>
      <p><strong>Source:</strong> <a href="https://www.emergency-planet.com/topic/16893-poly-count-on-apparatus/" target="_blank" rel="noreferrer">Emergency Planet poly count discussion</a>.</p>
    `
  },
  {
    category: "Maps",
    title: "Roads, Streets, and Civilian Traffic",
    tags: ["roads", "streets", "traffic", "paths"],
    body: `
      <p>EM4 separates civilian path movement from emergency vehicle routing. This is one of the most important map concepts because many route problems are caused by editing the wrong system.</p>
      <table>
        <thead><tr><th>System</th><th>Used by</th><th>Common failure</th></tr></thead>
        <tbody>
          <tr><td>Paths</td><td>Civilian pedestrians and civilian vehicles.</td><td>Civilians stop spawning, walk through bad areas, or civilian cars block a road.</td></tr>
          <tr><td>Streets</td><td>Emergency vehicle routefinder.</td><td>Player units cannot find the target, take strange routes, or refuse to enter a driveway.</td></tr>
          <tr><td>Spawn points</td><td>Traffic and civilian creation.</td><td>Log reports blocked spawn points or cars spawn into objects.</td></tr>
          <tr><td>Entries/exits</td><td>Vehicles entering/leaving the map.</td><td>Return-to-base or off-map response does not work correctly.</td></tr>
        </tbody>
      </table>
      <p>When a custom script tells a vehicle to leave the map, it is usually better to use native return/exit behavior than to manually guess a far-away VO. The map already knows its entries and exits through map properties.</p>
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
      <p>The base UI uses compact panels, bevelled button images, cyan headers, white text, tight spacing, and separate button-state assets. Main menu buttons are arranged in opposing columns around the center of a 1024 by 768 layout. This encyclopedia recreates that feel with original CSS so it can be published publicly without redistributing base-game UI artwork.</p>
      <p>If this is for a private team repo, you can add your own screenshots or legally usable images later in <code>assets/img</code>.</p>
    `
  },
  {
    category: "UI and Icons",
    title: "Base UI Files Used as Design Reference",
    tags: ["main menu", "base UI", "design"],
    body: `
      <p>The encyclopedia style is based on the structure of the base game UI files, especially <code>Data/UI/Game/MainMenu/mainmenu.xml</code>, <code>mainmenu_templates.xml</code>, and <code>Data/UI/Game/BaseWindow/basewindow.xml</code>.</p>
      <ul>
        <li>The main menu dialog is built for <code>1024x768</code>.</li>
        <li>Main menu buttons use separate image states: normal, hover, pressed, and disabled.</li>
        <li>The base title color is a bright cyan tone.</li>
        <li>Menu text uses tight spacing and compact Arial/Arial Black bitmap fonts.</li>
        <li>Base windows use tabs, objective rows, toggle buttons, and dense text blocks.</li>
      </ul>
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
    title: "How to Read a Script Case Study",
    tags: ["scripts", "beginner", "case studies"],
    body: `
      <p>The generated script case studies are meant for someone opening an EM4 script for the first time. Each article includes the full copied source, but you should not start by reading every line from top to bottom.</p>
      <h3>Use this order</h3>
      <ol>
        <li><strong>Purpose:</strong> read the first paragraph to understand what kind of gameplay the script controls.</li>
        <li><strong>Script map:</strong> find the script objects and whether they inherit from <code>CommandScript</code>, <code>MissionScript</code>, or another base.</li>
        <li><strong>Command lifecycle:</strong> for commands, identify <code>CheckPossible</code>, <code>CheckTarget</code>, and <code>PushActions</code>.</li>
        <li><strong>Constants:</strong> check command names, prototype paths, audio paths, VO names, and dummy state names.</li>
        <li><strong>Action queue:</strong> follow what the person, vehicle, or object does over time.</li>
        <li><strong>Dependencies:</strong> confirm the icons, cursors, prototypes, audio files, and map names actually exist in the mod.</li>
      </ol>
      <h3>What the extracted tables mean</h3>
      <p>The tables are not a replacement for reading code. They are a guided map. They show what the script touches so a beginner knows where to look first. If a command does not appear, start with command assignment and restrictions. If it appears but does nothing, start with target checks and action queues. If the game crashes, start with the logfile and the newest script or DDS file.</p>
      <p>When you are learning, open one script case study at a time. Pick a small script first, such as an equipment command, before trying a large station or callout system.</p>
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

if (typeof scriptCaseStudies !== "undefined") {
  articles.push(...scriptCaseStudies);
}

const categories = Array.from(new Set(articles.map(article => article.category)))
  .filter(category => category !== "GitHub");
let activeCategory = "Start Here";

const categoryList = document.getElementById("categoryList");
const articleGrid = document.getElementById("articleGrid");
const articleTitle = document.getElementById("articleTitle");
const articleCounter = document.getElementById("articleCounter");
const searchBox = document.getElementById("searchBox");
const template = document.getElementById("articleTemplate");

function articleMatches(article, query) {
  if (article.category === "GitHub") {
    return false;
  }

  if (!query && article.category !== activeCategory) {
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
  articleTitle.textContent = query ? "Search Results" : activeCategory;
  articleCounter.textContent = `${visible.length} entr${visible.length === 1 ? "y" : "ies"}`;

  visible.forEach((article, index) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".article-card");
    const title = node.querySelector(".article-title");
    const body = node.querySelector(".article-body");

    title.textContent = article.title;
    const renderBody = () => {
      if (body.dataset.loaded === "true") {
        return;
      }
      body.innerHTML = `${article.body}<div class="tag-row">${article.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>`;
      body.dataset.loaded = "true";
    };

    if (index === 0) {
      card.classList.add("open");
      renderBody();
    }

    title.addEventListener("click", () => {
      card.classList.toggle("open");
      if (card.classList.contains("open")) {
        renderBody();
      }
    });

    articleGrid.appendChild(node);
  });
}

searchBox.addEventListener("input", renderArticles);

renderCategories();
renderArticles();
