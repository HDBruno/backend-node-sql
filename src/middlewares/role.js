const { handleHttpErrors } = require("../utils/handleErrors");

module.exports.checkRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const userRole = user.role;
    const checkValueOfRole = roles.some((singleRole) => userRole.includes(singleRole))
    
    if(!checkValueOfRole){
      handleHttpErrors(res, "ERROR El usuario no tiene permiso.", 403);
      return;
    }
  
    next();
  } catch (error) {
    handleHttpErrors(res, "ERROR de permiso.", 403);
  }
};
