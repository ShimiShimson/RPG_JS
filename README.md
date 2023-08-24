<!DOCTYPE html>
<html>
<body>

<h1>Hero Creation and Battle System</h1>
<h1>Can I change sth?</h1>

<p>A simple web application for hero creation and battle simulation, built using HTML, CSS, and JavaScript. This project demonstrates the use of ES6 modules, event listeners, and basic game mechanics.</p>

<h2>Features</h2>
<ul>
  <li>Create heroes with different professions: Barbarian, Assassin, Sorceress, Archer.</li>
  <li>Simulate battles between heroes using an attack and dodge mechanic.</li>
  <li>Save and load hero data to continue your progress.</li>
</ul>

<h2>Getting Started</h2>
<ol>
  <li>Clone the repository:</li>
</ol>

<pre><code>git clone https://github.com/your-username/hero-creation-battle.git</code></pre>

<ol start="2">
  <li>Navigate to the project directory:</li>
</ol>

<pre><code>cd hero-creation-battle</code></pre>

<ol start="3">
  <li>Open the <code>index.html</code> file in your preferred web browser to use the application.</li>
</ol>

<h2>Usage</h2>
<ul>
  <li>Choose a hero profession from the dropdown menu and click the "Create Hero 1" or "Create Hero 2" button to create heroes.</li>
  <li>Click the "Save Heroes" button to save hero data locally.</li>
  <li>Click the "Load Heroes" button to load previously saved hero data.</li>
  <li>Initiate battles between heroes using the attack and dodge mechanic.</li>
</ul>

<h2>Mechanics</h2>
<p>The <code>attacking</code> function simulates battles between two heroes:</p>
<ul>
  <li>The attacker's profession and attack value are displayed.</li>
  <li>The defender's profession and current hit points (hp) are displayed.</li>
  <li>A random dodge chance is calculated for the defender.</li>
  <li>If the defender successfully dodges (dodge chance >= 100), the attack is evaded.</li>
  <li>Otherwise, the defender loses hit points equal to the attacker's attack value.</li>
  <li>If the defender's hit points drop to 0 or below, they are defeated.</li>
</ul>

<h2>Future Enhancements</h2>
<p>This project has potential for expansion:</p>
<ul>
  <li>Introduce a leveling up system for heroes.</li>
  <li>Implement monsters with experience and gold rewards.</li>
  <li>Add a shop system for purchasing items and equipment.</li>
  <li>Incorporate equipment slots and gear management.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

</body>
</html>
