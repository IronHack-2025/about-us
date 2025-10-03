<template>
  <div class="team-member">
    <img :src="member.photo" :alt="member.name" />
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
    <div class="links">
      <a v-if="member.linkedin" :href="member.linkedin" target="_blank">LinkedIn</a>
      <a v-if="member.github" :href="member.github" target="_blank">GitHub</a>
      <a v-if="member.portfolio" :href="member.portfolio" target="_blank">Portfolio</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: Object
  }
}
</script>

<style scoped>
.team-member {
  background-color: rgb(24,103,192);
  color: white;
  padding: 1.2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

/* Animació al fer hover */
.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(24,103,192,0.4);
}

.team-member img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

/* Zoom lleuger a la imatge */
.team-member:hover img {
  transform: scale(1.1);
}

.team-member h3 {
  margin: 0.5rem 0 0.2rem 0;
}

.team-member p {
  margin: 0.2rem 0 0.5rem 0;
}

.team-member .links a {
  color: white;
  margin: 0 0.3rem;
  text-decoration: underline;
  transition: color 0.3s ease;
}

/* Canvi de color al hover */
.team-member .links a:hover {
  color: #fffacd; /* un to clar per destacar */
}
</style>
