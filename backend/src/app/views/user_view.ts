import User from '../models/User';

export default {
    render(user: User) {
        return {
            id: user.id,
            matricula: user.matricula
        }
    },

    renderMany(users: User[]) {
        return users.map(user => this.render(user));
    }
}