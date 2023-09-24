import {fetchAPI, submitAPI} from "./mockApi.js";

export default function Tester() {
    fetchAPI("2023-09-21")
        .then(
            (response) => {
                alert(response);
            }
        )
        .catch(error => alert(error.message));
}