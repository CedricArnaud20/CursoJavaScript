const LIST = [
    {
        id: 1,
        nome: "yoda",
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: "Darth Vader",
        avatar: 'images/vader.png'
    },
    {
        id: 3,
        nome: "R2-D2",
        avatar: 'images/r2d2.png'
    },
    {
        id: 4,
        nome: "Luke Skywalker",
        avatar: 'images/luke.png'
    },
    {
        id: 5,
        nome: "Leia Organa",
        avatar: 'images/leia.png'
    },
    {
        id: 6,
        nome: "Han Solo",
        avatar: 'images/hansolo.png'
    },
    {
        id: 7,
        nome: "Chewbacca",
        avatar: 'images/chewbacca.png'
    },
    {
        id: 8,
        nome: "C-3PO",
        avatar: 'images/c3po.png'
    }

]


const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Arnaud',
        character: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName}recebeu um like`)
        },
        remove(id) {
            const list = this.character

            const result = list.filter(item => {
                return item.id !== id
            })

            this.character= result
        },
        search() {
            if (this.searchName === '') {
                return alert('informe o nome de um personagem!!!')
            }
            const list = this.character = LIST

            const result = list.filter((item) => {
                return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum personagem encontrado')
            } else {
                this.character = result
            }

        },
    }
})
