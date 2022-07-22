module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nombre: String,
            carro: Object
        },
        {
            timestamps: false
        }
    );
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Evento = mongoose.model("evento", schema);
    return Evento;
};
