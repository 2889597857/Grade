import { useStore } from "vuex";
const showComponent = () => {
    const store = useStore()
    const jurisdiction = store.state.information.jurisdiction;
    if (jurisdiction) {
        return "student";
    } else {
        return "teacher";
    }
}
export {
    showComponent
}