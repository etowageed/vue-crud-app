<template>
    <div class="h-5">
        <h1>Our People</h1>
    </div>
    <div class="database-card w-2/3 mx-auto">
        <RouterLink to="/people/create" class="px-5 py-3 bg-green-600 text-slate-800 rounded-full font-medium inline-block">
            Add person
        </RouterLink>
        <div class="data-tables">
            <table class="border border-red-600 w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>OCCUPATION</th>
                        <th>MUSIC GENRE</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="person in this.people">
                        <td>{{ person.id }}</td>
                        <td>{{ person.name }}</td>
                        <td>{{ person.occupation }}</td>
                        <td>{{ person.music_genre }}</td>
                        <td>{{ person.email }}</td>
                        <td>{{ person.phone }}</td>
                        <td class="space-x-3">
                            <!-- this will serve as edit (patch) button -->
                            <RouterLink :to="{ path: '/people/' + person.id + '/edit' }"
                                class="p-2 bg-amber-200 text-slate-800 rounded-full font-medium inline-block">
                                Edit
                            </RouterLink>
                            <button type="button" @click="deletePerson(person.id)"
                                class="p-2 bg-red-200 text-slate-800 rounded-full font-medium inline-block">
                                Del
                            </button>
                        </td>

                    </tr>
                </tbody>

            </table>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'people',
    data() {
        return {

            people: []

        }
    },

    mounted() {
        this.getPeople();

        // console.log("you called")

    },

    methods: {
        getPeople() {
            axios.get('http://localhost:3000/people').then(res => {
                this.people = res.data
                console.log(this.people)
            })
        },
        deletePerson(personId) {
            console.log(personId)
            if (confirm('are you sure you want to delete this?')) {
                axios.delete(`http://localhost:3000/people/${personId}`).then(res => {
                    alert('record successfully deleted')
                    this.getPeople();
                })
            }
        },
    }
}
</script>

