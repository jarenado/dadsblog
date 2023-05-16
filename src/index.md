---
title: Title
layout: index.njk

---

<h5>Title</h5>
<div class="card">
  <h5>{{ title }}</h5>
  <p>{{ metadata.description }}</p>
  {% image 'src/assets/img/minion.jpeg', '', "(min-width: 50em) 50vw, 100vw" %}
</div>

