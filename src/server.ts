import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function boostrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database is connected Successfully`)

        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

boostrap();