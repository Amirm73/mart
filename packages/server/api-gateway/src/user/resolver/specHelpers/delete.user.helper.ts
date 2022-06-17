export const DeleteUserOperationName = 'DeleteUser';
export const DeleteUserMutation = `mutation
DeleteUser( $id:String! ) {
  DeleteUser(  _id: $id ) {
    _id
  }
}
`;
