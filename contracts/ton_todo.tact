import "@stdlib/deploy";


contract TonTodo with Deployable {

    let id:Int = 0;

    struct Tasks {
        Title: String = "";
        IsCompleted: Bool = false;
        Owner: Address;
    }

    let list: map<Int, Tasks> = emptyMap();

    extends mutates fun addTodo(title: String){
        self.list.Title = title;
        self.list.Owner = sender();
    }

    fun getTodo(id: Int): Tasks{
        return self.list[id];
    }

    extends mutates fun markComlete(id: Int){
        list[id].IsCompleted = true;
    }

}
