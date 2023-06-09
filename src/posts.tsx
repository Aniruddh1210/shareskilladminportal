import {List,Datagrid,TextField,ReferenceField,EditButton,Edit,SimpleForm,ReferenceInput,TextInput,} from "react-admin";
import { useRecordContext } from "react-admin";
import { Create } from "react-admin";



export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);





export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);




export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

 const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
}; 

const postFilters = [
<TextInput source="q" label="Search" alwaysOn />,<ReferenceInput source="userId" label="User" reference="users" />,
];