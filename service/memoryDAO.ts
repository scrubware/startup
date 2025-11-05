
import { DAO } from "./DAO"
import { User, FeedItem  } from "../shared/models"

export class MemoryDAO implements DAO {
    users: User[] = []
    posts: FeedItem[] = []

    register(): void {
        throw new Error("Method not implemented.")
    }
    login(): void {
        throw new Error("Method not implemented.")
    }
}