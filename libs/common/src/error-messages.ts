export const ApiError = {
  // Data access
  documentsNotFound: 'The document(s) could not be found.',
  documentNotFound: 'The document could not be found.',
  documentsNotCreated: 'The document(s) could not be created.',
  documentNotCreated: 'The document could not be created.',
  documentsNotUpdated: 'The document(s) could not be updated.',
  documentNotUpdated: 'The document could not be updated.',

  // Organization
  findOrganizationError: 'Failed to look up the organization.',
  organizationNotFound: 'The organization could not be found.',

  // Order
  findOrderError: 'Failed to look up the order.',
  updateOrderError: 'Failed to update the order.',
  alreadyCancelledError: 'order has already been cancelled.',
  invalidOrder: 'Not a valid order.',
  itemOutOfStockError: 'Oh no — one of your chosen items is out of stock!',

  // Product
  productsNotFound: 'The products could not be found.',

  // User
  emailNotVerified:
    "Your email hasn't yet been verified. Follow the link in the email we sent you to verify your account.",
  invalidCurrentPassword: 'Wrong current password. Try again.',
  invalidPassword: 'Wrong password. Try again.',
  sameReusePassword: 'Same password can not be used.',
  userEmailExists:
    "Looks like there's already an account with that email. Try logging in!",
  usernameExists:
    "Looks like there's already an account with that username. Try logging in!",
  userNotAuthenticated: "You're not logged in.",
  userNotAuthorized: "You don't have permission to do that. Sorry!",
  userNotActive: 'You are not active.',
  userNotFound: "We couldn't find a user with that email address.",
  confirmTokenExpired: 'Confirmation link has been expired!',
  resetTokenExpired: 'Reset link has been expired.',

  // Generic
  generic: 'Oops! Something went wrong. Please refresh the page and try again.',
  serverWarning:
    "Something's not quite right. You might experience better performance if you refresh the page.",
  serverError: 'Oops — something went wrong. Try refreshing the page.',

  invalidCart: 'Your cart is not valid.',
  locationNotFound: 'Unable to find location',
  deleteDefaultItem: 'Default item can not be deleted.',
  onlyImageFileType: 'Only image can be uploaded here',
} as const;
