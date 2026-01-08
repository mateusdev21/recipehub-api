module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            description: String,
            image: String,
            ingredients: [String],
            steps: [String],
            isFeatured: Boolean,
            createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        },
        { timestamps: true }
    );

    schema.method('toJSON', function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Recipe = mongoose.model('recipes', schema);
    return Recipe;
}