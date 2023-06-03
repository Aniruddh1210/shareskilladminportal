import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit } from "./posts";import { UserList } from "./users";
import { UserList } from "./users";

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} />
        <Resource name="users" list={UserList} recordRepresentation="name" />
    </Admin>
);