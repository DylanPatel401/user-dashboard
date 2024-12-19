import { fetchUserActivities, fetchUsers} from "./api.js";

let ud = await fetchUsers();
console.log(ud);