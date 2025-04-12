// Error handling middleware
function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error stack for debugging

    res.status(err.status || 500); // Set the response status code
    res.json({
        message: err.message, // Send the error message
        // Optionally include additional error details
        ...(process.env.NODE_ENV === 'development' && { error: err }) 
    });
}

// Export the error handler
module.exports = errorHandler;
