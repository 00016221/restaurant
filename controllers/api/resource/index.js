const resource_controller = {
    protected_resource: (req, res) => {
        return res.json('accessing protected resource')
    }
}

module.exports = resource_controller