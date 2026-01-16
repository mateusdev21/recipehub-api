module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            summary: String,
            image: String,
            createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        },
        { timestamps: true }
    );

    schema.method('toJSON', function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const News = mongoose.model('news', schema);
    return News;
}