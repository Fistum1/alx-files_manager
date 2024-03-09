import { ObjectId } from 'mongodb';

/**
 * A module with basic utilities
 */

const basicUtils = {
  /**
   * It checks if Id is Valid for Mongo
   * 
   * @id {string|number} id to be evaluated
   * @return {boolean} true if valid, false if not
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
