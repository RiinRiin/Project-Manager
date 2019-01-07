<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">


      <v-layout row class="mb-3">

        <v-tooltip top>
          <v-btn small flat color=grey @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By Project Name</span>
          </v-btn>
          <span>Sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color=grey @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By Person</span>
          </v-btn>
          <span>Sort by Person</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color=grey @click="sortBy('due')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By Due Date</span>
          </v-btn>
          <span>Sort by Due Date</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color=grey @click="sortBy('status')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By Status</span>
          </v-btn>
          <span>Sort by Status</span>
        </v-tooltip>

      </v-layout>


      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">

          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>

        </v-layout>

        <v-divider></v-divider>

      </v-card>

    </v-container>
    
  </div>
</template>


<script>
import db from'@/fb'

export default {
  name: 'Dashboard',
  data(){
    return{
      projects: [
        {title: 'Design a new website', person: 'Andy', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Code up the homepage', person: 'Miriam', due: '19st Feb 2019', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Design video thumbnails', person: 'Roman', due: '7st March 2019', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
        {title: 'Create a community forum', person: 'Mei', due: '30st July 2019', status: 'overdue', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nostrum deleniti dolor laboriosam porro, cum laudantium et quisquam libero vel est minima laborum sapiente iusto quibusdam exercitationem officia harum sit!'},
      ],
      sort: true
    }
  },
  methods: {
    sortBy(prop){
      if (this.sort){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        this.sort = !this.sort
      } else{
        this.projects.sort((a,b) => a[prop] < b[prop] ? 1 : -1)
        this.sort = !this.sort
      }
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


<style>
  .project.complete {
    border-left: 4px solid #3cd1c2;
  } 
  .project.ongoing {
    border-left: 4px solid orange;
  } 
  .project.overdue {
    border-left: 4px solid tomato;
  } 

  .v-chip.complete {
    background: #3cd1c2;
  }
  .v-chip.ongoing {
    background: orange;
  }
  .v-chip.overdue {
    background: tomato;
  }
</style>
