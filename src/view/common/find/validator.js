import { reactive, ref } from "vue";
import findApi from './findApi.js';
export default function validator (params) {
    const validateId = (rule, value, callback) => {
        if (value == "") {
            callback(new Error("请输入学号"));
        } else if (value.length < 1) {
            callback(new Error("学号位数少于6位"));
        } else {
            callback();
        }
    }
    const submitForm = () => {
        result.value.validate((valid) => {
            if (valid) {
                loading.value = true
                findGrides(id.id)
            } else {
                return false;
            }
        });
    };
    const findGrides = (id) => {
        findApi(id).then((result) => {
            stuName.value = result.name
            res.value = result.grade
            stuId.value = result.id
            container.value = true
            loading.value = false
        }).catch((err) => {
            console.log(err)
        });
    }
    const findG = (id) => {
        findGrides(id)
    }
    const id = reactive({
        id: "",
    });
    const result = ref(null);
    const rules = {
        id: [{ validator: validateId, trigger: "blur" }],
    };
    const container = ref(false);
    const loading = ref(false)
    const stuName = ref('')
    const res = ref([])
    const stuId = ref()
    return {
        validateId, submitForm, id, result, rules, container, stuName, loading, res, findG, stuId
    }
}