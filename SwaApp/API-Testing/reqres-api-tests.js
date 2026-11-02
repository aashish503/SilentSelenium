// Parse response
const response = pm.response.json();

// ==========================================
// 1. Status Code
// ==========================================

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


// ==========================================
// 2. Response is JSON
// ==========================================

pm.test("Response is valid JSON", function () {
    pm.response.to.be.json;
});


// ==========================================
// 3. Top-level fields
// ==========================================

pm.test("Response contains data field", function () {
    pm.expect(response).to.have.property("data");
});

pm.test("Response contains meta field", function () {
    pm.expect(response).to.have.property("meta");
});


// ==========================================
// 4. Data validation
// ==========================================

pm.test("Data is an array", function () {
    pm.expect(response.data).to.be.an("array");
});

pm.test("Data array is not empty", function () {
    pm.expect(response.data.length).to.be.greaterThan(0);
});


// ==========================================
// 5. Validate each product record
// ==========================================

response.data.forEach((item, index) => {

    pm.test(`Product ${index + 1} has id`, function () {
        pm.expect(item).to.have.property("id");
        pm.expect(item.id).to.be.a("string");
    });

    pm.test(`Product ${index + 1} has collection_id`, function () {
        pm.expect(item).to.have.property("collection_id");
        pm.expect(item.collection_id).to.be.a("string");
    });

    pm.test(`Product ${index + 1} has project_id`, function () {
        pm.expect(item).to.have.property("project_id");
        pm.expect(item.project_id).to.be.a("number");
    });

    pm.test(`Product ${index + 1} has app_user_id`, function () {
        pm.expect(item).to.have.property("app_user_id");
        pm.expect(item.app_user_id === null || typeof item.app_user_id === "string")
            .to.be.true;
    });

    pm.test(`Product ${index + 1} has created_by`, function () {
        pm.expect(item).to.have.property("created_by");
        pm.expect(item.created_by).to.be.a("number");
    });

    pm.test(`Product ${index + 1} has created_at`, function () {
        pm.expect(item).to.have.property("created_at");
        pm.expect(item.created_at).to.be.a("string");
    });

    pm.test(`Product ${index + 1} has updated_at`, function () {
        pm.expect(item).to.have.property("updated_at");
        pm.expect(item.updated_at).to.be.a("string");
    });

    pm.test(`Product ${index + 1} has deleted_at`, function () {
        pm.expect(item).to.have.property("deleted_at");
    });

    // ==========================================
    // Product data object
    // ==========================================

    pm.test(`Product ${index + 1} contains data object`, function () {
        pm.expect(item).to.have.property("data");
        pm.expect(item.data).to.be.an("object");
    });

    pm.test(`Product ${index + 1} has product name`, function () {
        pm.expect(item.data).to.have.property("name");
        pm.expect(item.data.name).to.be.a("string");
        pm.expect(item.data.name).to.not.be.empty;
    });

    pm.test(`Product ${index + 1} has price`, function () {
        pm.expect(item.data).to.have.property("price");
        pm.expect(item.data.price).to.be.a("number");
    });

    pm.test(`Product ${index + 1} has category`, function () {
        pm.expect(item.data).to.have.property("category");
        pm.expect(item.data.category).to.be.a("string");
        pm.expect(item.data.category).to.not.be.empty;
    });

    pm.test(`Product ${index + 1} has in_stock`, function () {
        pm.expect(item.data).to.have.property("in_stock");
        pm.expect(item.data.in_stock).to.be.a("boolean");
    });
});


// ==========================================
// 6. Meta validation
// ==========================================

pm.test("Meta is an object", function () {
    pm.expect(response.meta).to.be.an("object");
});

pm.test("Meta has page", function () {
    pm.expect(response.meta).to.have.property("page");
    pm.expect(response.meta.page).to.be.a("number");
});

pm.test("Meta has limit", function () {
    pm.expect(response.meta).to.have.property("limit");
    pm.expect(response.meta.limit).to.be.a("number");
});

pm.test("Meta has total", function () {
    pm.expect(response.meta).to.have.property("total");
    pm.expect(response.meta.total).to.be.a("number");
});

pm.test("Meta has pages", function () {
    pm.expect(response.meta).to.have.property("pages");
    pm.expect(response.meta.pages).to.be.a("number");
});


// ==========================================
// 7. Meta values validation
// ==========================================

pm.test("Page is 1", function () {
    pm.expect(response.meta.page).to.eql(1);
});

pm.test("Limit is 50", function () {
    pm.expect(response.meta.limit).to.eql(50);
});

pm.test("Total matches data count", function () {
    pm.expect(response.meta.total).to.eql(response.data.length);
});

pm.test("Pages is 1", function () {
    pm.expect(response.meta.pages).to.eql(1);
});