<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(project,i) in myProjects" :key="i">

          <div slot="header">{{ project.title }}</div>

          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
    
  </div>
</template>


<script>
import db from '@/fb'

export default {
  name: 'Projects',
  data(){
    return{
      projects: [
        {title: 'Design a new website', person: 'Andy', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Code up the homepage', person: 'Miriam', due: '19st Feb 2019', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Design video thumbnails', person: 'Roman', due: '7st March 2019', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Outline next year\'s goals and timeline', person: 'Mei', due: '1st Jan 2018', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Pitch MVP to raise funding', person: 'Andy', due: '1st Dec 2017', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Create a MVP', person: 'Andy', due: '1st May 2017', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Assemble a team', person: 'Andy', due: '1st Jan 2017', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
      ],
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Andy'
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>
