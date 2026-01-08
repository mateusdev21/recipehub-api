const PDFDocument = require('pdfkit')

module.exports = (recipe, res) => {
    const doc = new PDFDocument({ size: 'A4' })
    res.setHeader('Content-Type', 'application/pdf')
    doc.pipe(res)

    doc.fontSize(16).font('Helvetica-Bold').text(recipe.title, {
        align: 'center'
    })

    doc.moveDown().fontSize(12).font('Helvetica').text(recipe.description)

    doc.moveDown().font('Helvetica-Bold').text('Ingredients:')
    recipe.ingredients.forEach(i => doc.font('Helvetica').text(`- ${i}`))

    doc.font('Helvetica-Bold').text('\nSteps:')
    recipe.steps.forEach((s, i) => doc.font('Helvetica').text(`${i + 1}. ${s}`))

    doc.end()
}
