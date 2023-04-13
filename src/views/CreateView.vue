<template>
    <div class="container">
        <h4>Add People</h4>

        <ul v-if="Object.keys(this.errorList).length > 0" class="text-yellow-400">
            <li v-for="(error, index) in this.errorList" :key="index">
                {{ error[0] }}
            </li>
        </ul>
        <div class="form">

            <div>
                <label for="name">Name</label>
                <input type="text" v-model="model.people.name">
            </div>
            <div>
                <label for="name">occupation</label>
                <input type="text" v-model="model.people.occupation">
            </div>
            <div>
                <label for="name">Music Genre</label>
                <input type="text" v-model="model.people.music_genre">
            </div>
            <div>
                <label for="name">Email</label>
                <input type="text" v-model="model.people.email">
            </div>
            <div>
                <label for="name">Phone</label>
                <input type="text" v-model="model.people.phone">
            </div>

            <RouterLink to="/people/create">
                <button class="px-5 py-3 bg-green-600 text-slate-800 rounded-full font-medium inline-block" type="button"
                    @click="savePerson">Save</button>
            </RouterLink>
        </div>
    </div>
</template>

<script >
import axios from 'axios';
export default {
    name: 'create',
    data() {
        return {
            errorList: "",
            model: {
                people: {
                    name: '',
                    occupation: '',
                    music_genre: '',
                    email: '',
                    phone: ''
                }
            }
        }
    },
    methods: {
        savePerson() {
            let mythis = this;
            axios.post(' http://localhost:3000/people', this.model.people).then(res => {
                console.log(res.data)
                alert('Person added successfuly and their ID is ' + res.data.id);

                this.model.people = {
                    name: '',
                    occupation: '',
                    music_genre: '',
                    email: '',
                    phone: ''
                }
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        mythis.errorList = error.response.data.errors
                    }

                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log('error!', error.message)
                }
            })
        }
    }
}
</script>

