<template>
  <section class="about-us">
    <h1>Meet Our Team</h1>
    <div class="team-grid">
      <TeamMember
        v-for="member in members"
        :key="member.id"
        :member="member"
      />
    </div>
  </section>
</template>

<script>
import TeamMember from '../components/TeamMember.vue'

export default {
  components: { TeamMember },
  data() {
    return {
      members: [
        {
          id: 1,
          name: 'Christian Baron',
          role: 'Headaches',
          photo: '/src/assets/imatges/ChristianBaron.jpg',
          linkedin: 'https://www.linkedin.com/in/christianbaron-/',
          github: 'https://github.com/ccbaron',
          portfolio: ''
        },
        {
          id: 2,
          name: 'Maria Jie Bolós',
          role: 'Headaches',
          photo: '/src/assets/imatges/MariaJieB.jpg',
          linkedin: 'https://www.linkedin.com/in/maria-jie-bolós-gago-7a9240211',
          github: 'https://github.com/shimotachi3',
          portfolio: ''
        },
        {
          id: 3,
          name: 'Sergio Calvo',
          role: 'Headaches',
          photo: '/src/assets/imatges/SergioCalvo.jpg',
          linkedin: 'https://www.linkedin.com/in/sergiocalvomiron/',
          github: 'https://github.com/SergioCaMi',
          portfolio: ''
        },
        {
          id: 4,
          name: 'Juan David Ospina',
          role: 'Headaches',
          photo: '/src/assets/imatges/JuanDavid.jpg',
          linkedin: 'https://www.linkedin.com/in/jd-ol/',
          github: 'https://github.com/juandation',
          portfolio: ''
        },
        {
          id: 5,
          name: 'Robert Maynou',
          role: 'Headaches',
          photo: '/src/assets/imatges/RobertMaynou.jpg',
          linkedin: 'https://www.linkedin.com/in/robert-maynou-96585527a/',
          github: 'https://github.com/ErebosXYZ',
          portfolio: ''
        },
        {
          id: 6,
          name: 'Óscar Miras',
          role: 'Headaches',
          photo: '/src/assets/imatges/OscarMiras.jpg',
          linkedin: 'https://www.linkedin.com/in/mirasortiz/',
          github: 'https://github.com/omiras',
          portfolio: ''
        },
        {
          id: 7,
          name: 'Alejandro Noriega',
          role: 'Headaches',
          photo: '/src/assets/imatges/AlejandroNR.jpg',
          linkedin: 'https://www.linkedin.com/in/alejandro-noriega-guerra-b89435a3/',
          github: 'https://github.com/alenorgue',
          portfolio: ''
        },        
      ]
    }
  }
}
</script>

<style scoped>
.about-us {
  text-align: center;
  padding: 2rem;
  background-color: white;
}

/* Efecte suau al títol */
.about-us h1 {
  color: rgb(24,103,192);
  margin-bottom: 2rem;
  font-size: 2.5rem;
  transition: color 0.3s ease;
}

.about-us h1:hover {
  color: rgb(35,123,220);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}
</style>
