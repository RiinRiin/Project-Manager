<template>
    <nav>
        <!-- snackbar notification -->
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Project</span>
                <span>Manager</span>
            </v-toolbar-title>

            <!-- Content ABOVE spacer will be on toolbar LEFT-->
            <v-spacer></v-spacer>
            <!-- Content BELOW spacer will be on toolbar RIGHT -->


            <!-- drop down menu -->
            <v-menu offset-y>
                <v-btn flat slot="activator" color="grey">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <!-- signout button -->
            <v-btn flat color='grey'>
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <!-- avatar -->
        <v-navigation-drawer v-model="drawer" app class='indigo'>
            <v-layout column align-center>
                <v-flex class=mt-5>
                    <v-avatar size="100">
                        <img src="/avatar-4.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-xs-center">
                        Andy
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true" />
                </v-flex>
            </v-layout>

            <v-list>
                <!-- Similar to <li> tags -->
                <!-- router v-bind:to="" gives a button like quality -->
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    
                    <!-- Icons -->
                    <v-list-tile-action>
                        <v-icon class='white--text'>{{link.icon}}</v-icon>
                    </v-list-tile-action>

                    <!-- Display all text content in the list -->
                    <v-list-title-content>
                        <v-list-tile-title class='white--text'>{{link.text}}</v-list-tile-title>
                    </v-list-title-content>

                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>


<script>
import Popup from './Popup.vue'

export default {
    name: 'Navbar',
    components: {
        Popup
    },
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/'},
                {icon: 'folder', text: 'My Projects', route: '/projects'},
                {icon: 'person', text: 'Team', route: '/team'},
            ],
            snackbar: false
        }
    }
}
</script>


<style>

</style>
