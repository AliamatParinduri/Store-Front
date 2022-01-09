export default {
    formatRupiah: (params) => params.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\."),
}