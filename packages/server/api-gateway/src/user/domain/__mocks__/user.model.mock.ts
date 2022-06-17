import { mockUser } from './user.document.mock';

class UserModelMock {
  constructor(private data) {}
  new = jest.fn().mockResolvedValue(this.data);
  save = jest.fn().mockResolvedValue(this.data);
  static find = jest.fn().mockResolvedValue(mockUser());
  static create = jest.fn().mockResolvedValue(mockUser());
  static remove = jest.fn().mockResolvedValueOnce(true);
  static exists = jest.fn().mockResolvedValue(false);
  static findOne = jest.fn().mockResolvedValue(mockUser());
  static findByIdAndUpdate = jest.fn().mockResolvedValue(mockUser());
  static findByIdAndDelete = jest.fn().mockReturnThis();
  static exec = jest.fn();
  static deleteOne = jest.fn().mockResolvedValue(true);
  static findById = jest.fn().mockReturnThis();
}
export default UserModelMock;
