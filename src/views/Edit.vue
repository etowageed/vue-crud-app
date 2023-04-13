<template>
    <div class="container">
        <h4>Edit People</h4>

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
                    @click="updatePerson">Update</button>
            </RouterLink>
        </div>
    </div>
</template>

<script >
import axios from 'axios';
export default {
    name: 'peopleEdit',
    data() {
        return {
            personId: '',
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
    mounted() {
        // console.log(this.$route.params.id)
        this.personId = this.$route.params.id
        this.getPeopleData(this.$route.params.id)
    },
    methods: {

        // thisfunction is to get a particular record and populate the input fields for it to be edited
        getPeopleData(personId) {
            axios.get(`http://localhost:3000/people/${personId}`).then(res => {
                console.log(res.data);
                // this is to get a particular field for a paricular entry
                // this.model.people.name = res.data.name
                this.model.people = res.data
            })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 404) {
                            alert('No person ID found')
                            // mythis.errorList = error.response.data.errors
                        }

                    }
                })
        },

        updatePerson() {
            var mythis = this;
            axios.put(`http://localhost:3000/people/${this.personId}`, this.model.people).then(res => {
                console.log(res.data)
                alert(`Person ${res.data.id} has been successfully updated`);


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

