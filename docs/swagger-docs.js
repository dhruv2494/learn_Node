/**
 * Swagger documentation for user-related APIs.
 */

/**
 * @swagger
 * paths:
 *    /auth/register:
 *     post:
 *       summary: Add User
 *       description: Add
 *       tags:
 *         - Auth
 *       requestBody:
 *         description: User
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The username
 *                 email:
 *                   type: string
 *                   description: The email address
 *                 number:
 *                   type: number
 *                   description: The Number
 *                 password:
 *                   type: string
 *                   description: The password
 *       responses:
 *         201:
 *           description: Successful response
 *         500:
 *           description: Internal server error
 *    /auth/login:
 *     post:
 *       summary: Add User
 *       description: Add
 *       tags:
 *         - Auth
 *       requestBody:
 *         description: User
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The email address
 *                 password:
 *                   type: string
 *                   description: The password
 *       responses:
 *         201:
 *           description: Successful response
 *         500:
 *           description: Internal server error
 *    /auth/verify-user:
 *     post:
 *       summary: Verify User
 *       description: Verify User Using OTP
 *       tags:
 *         - Auth
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Successful response
 *         500:
 *           description: Internal server error
 *
 *    /user/get-all-user:
 *     get:
 *       summary: Get all users
 *       description: Retrieve a list of all users
 *       tags:
 *         - Users
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Successful response
 *         500:
 *           description: Internal server error
 *
 *
 *
 *    /user/get-user:
 *     post:
 *       summary: Get User
 *       description: Get User Using Email
 *       tags:
 *         - Users
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         description: User data
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *
 *                 email:
 *                   type: string
 *                   description: The email address
 *
 *       responses:
 *         200:
 *           description: Successful response
 *         500:
 *           description: Internal server error
 *    /user/update-user:
 *     post:
 *       summary: Update User
 *       description: Update User Using userID
 *       tags:
 *         - Users
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         description: User data
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID
 *                 name:
 *                   type: string
 *                   description: The ID
 *                 email:
 *                   type: string
 *                   description: The ID
 *                 m_number:
 *                   type: string
 *                   description: The ID
 *
 *       responses:
 *         200:
 *           description: Successful response
 *         500:
 *           description: Internal server error
 *    /user/delete-user:
 *     delete:
 *       summary: Delete User
 *       description: Delete User Using userID
 *       tags:
 *         - Users
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         description: User data
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID
 *
 *       responses:
 *         200:
 *           description: Successful response
 *         500:
 *           description: Internal server error
 *
 *
 *
 */
